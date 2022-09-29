const ADD_POST = 'ADD-POST'
const UPDATE_TEXT = 'UPDATE-TEXT'
const SET_PROFILE_USER = 'SET_PROFILE_USER'

type PostDataType = {
    id: number
    message: string
    count: number
}

type initialStateType = {
    postData: Array<PostDataType>
    newPostText: string
    profile: any
}

let initialState: initialStateType = {
    postData: [
        { id: 1, message: 'Привет, меня зовут Вика', count: 10 },
        { id: 2, message: 'Это мой первый пост', count: 15 }
    ],

    newPostText: 'hello',
    profile: null

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

export let addPostActionCreator = ():AddPostActionType => ({type: ADD_POST})
export let updateTextActionCreator = (text:string):UpdateTextActionType => ({type: UPDATE_TEXT, newText: text})
export let setProfileUser = (profile:any):SetProfileUserActionType => ({type:SET_PROFILE_USER, profile})


export default profileReducer