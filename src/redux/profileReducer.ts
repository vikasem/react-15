import { profileApi } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_TEXT = 'UPDATE-TEXT'
const SET_PROFILE_USER = 'SET_PROFILE_USER'
const SET_STATUS = 'SET_STATUS'

type PostDataType = {
    id: number
    message: string
    count: number
}

type initialStateType = {
    postData: Array<PostDataType>
    newPostText: string
    profile: any
    status: string
}

let initialState: initialStateType = {
    postData: [
        { id: 1, message: 'Привет, меня зовут Вика', count: 10 },
        { id: 2, message: 'Это мой первый пост', count: 15 }
    ],

    newPostText: 'hello',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case ADD_POST: 
            return {
                ...state,
                postData: [...state.postData, { id: 3, message: state.newPostText, count: 1}],
                newPostText: ''
            };
        case UPDATE_TEXT: 
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_PROFILE_USER: 
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state

    }

}

type AddPostActionType = {
    type: typeof ADD_POST
}
type UpdateTextActionType = {
    type: typeof UPDATE_TEXT 
    newText: string
}
type SetProfileUserActionType = {
    type: typeof SET_PROFILE_USER 
    profile: any
}
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}

export let addPostActionCreator = ():AddPostActionType => ({type: ADD_POST})
export let updateTextActionCreator = (text:string):UpdateTextActionType => ({type: UPDATE_TEXT, newText: text})
export let setProfileUser = (profile:any):SetProfileUserActionType => ({type:SET_PROFILE_USER, profile})
export let setStatus = (status: any):SetStatusActionType => ({type: SET_STATUS, status})

export let profileUser = (userId: any) => {
    return (dispatch: any) => {
        profileApi.infoUser(userId)
        .then(data => {
            dispatch(setProfileUser(data))
        })
    }
}

export let getStatus = (userId: any) => {
    return (dispatch: any) => {
        profileApi.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data))
        })
    }
}
export let updateStatus = (status: any) => {
    return (dispatch: any) => {
        profileApi.updateStatus(status)
        .then(data => {
            if(data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
    }
}


export default profileReducer