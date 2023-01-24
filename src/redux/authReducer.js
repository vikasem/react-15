import { stopSubmit } from "redux-form";
import { meApi, securityApi } from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export let setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })
export let getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} })

export let userAuthorization = () => async (dispatch) => {
    let data = await meApi.meInfo()
    if (data.resultCode === 0) {
        let { id, email, login } = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export let login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await meApi.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(userAuthorization())
    } else {
        if(data.resultCode === 10){
            dispatch(getCaptchaUrl())
        }
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

export let getCaptchaUrl = () => async (dispatch) => {
    let data = await securityApi.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer