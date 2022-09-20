const ADD_POST = 'ADD-POST'
const UPDATE_TEXT = 'UPDATE-TEXT'

let initialState = {
    postData: [
        { id: 1, message: 'Привет, меня зовут Вика', count: 10 },
        { id: 2, message: 'Это мой первый пост', count: 15 }
    ],

    newPostText: 'hello'
}

const profileReducer = (state = initialState, action) => {
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
        default:
            return state

    }

}

export let addPostActionCreator = () => ({type: ADD_POST})

export let updateTextActionCreator = (text) => ({type: UPDATE_TEXT, newText: text})


export default profileReducer