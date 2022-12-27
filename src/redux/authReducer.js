import { stopSubmit } from "redux-form";
import { meApi } from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export let setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })

export let userAuthorization = () => async (dispatch) => {
    let data = await meApi.meInfo()
    if (data.resultCode === 0) {
        let { id, email, login } = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export let login = (email, password, rememberMe) => async (dispatch) => {
    let data = await meApi.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(userAuthorization())
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }))
    }
}

export let logout = () => async (dispatch) => {
    let data = await meApi.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer