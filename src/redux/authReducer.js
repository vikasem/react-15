import { stopSubmit } from "redux-form";
import { meApi } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

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

export let userAuthorization = () => (dispatch) =>{
        return(
            meApi.meInfo()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
        )
    }


export let login = (email, password, rememberMe) => (dispatch) => {
        meApi.login(email, password, rememberMe)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(userAuthorization())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
    }


export let logout = () => {
    return (dispatch) => {
        meApi.logout()
        .then(data => {
            if(data.resultCode === 0){
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}

export default authReducer