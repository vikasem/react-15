import { profileApi } from "../api/api"

const ADD_POST = 'profile/ADD-POST'
const SET_PROFILE_USER = 'profile/SET_PROFILE_USER'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'

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

const profileReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [...state.postData, { id: 3, message: action.newPostText, count: 1 }],
                newPostText: ''
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
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(post => post.id != action.id)
            };
        default:
            return state

    }
}

type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}

type SetProfileUserActionType = {
    type: typeof SET_PROFILE_USER
    profile: any
}
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}

type DeletePostActionType = {
    type: typeof DELETE_POST
    id: number
}

export let addPost = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText })
export let setProfileUser = (profile: any): SetProfileUserActionType => ({ type: SET_PROFILE_USER, profile })
export let setStatus = (status: any): SetStatusActionType => ({ type: SET_STATUS, status })
export let deletePost = (id: number): DeletePostActionType => ({ type: DELETE_POST, id })

export let profileUser = (userId: any) => async (dispatch: any) => {
    let data = await profileApi.infoUser(userId)
    dispatch(setProfileUser(data))
}

export let getStatus = (userId: any) => async (dispatch: any) => {
    let data = await profileApi.getStatus(userId)
    dispatch(setStatus(data))
}

export let updateStatus = (status: any) => async (dispatch: any) => {
    let data = await profileApi.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer