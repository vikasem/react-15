const ADD_POST = 'ADD-POST'
const UPDATE_TEXT = 'UPDATE-TEXT'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                count: 1
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state

    }

}

export let addPostActionCreator = () => ({type: ADD_POST})

export let updateTextActionCreator = (text) => ({type: UPDATE_TEXT, newText: text})


export default profileReducer