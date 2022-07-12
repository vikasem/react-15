import dialogReducer from "./dialogReducer"
import profileReducer from "./profileReducer"


let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Привет, меня зовут Вика', count: 10 },
                { id: 2, message: 'Это мой первый пост', count: 15 }
            ],

            newPostText: 'hello'
        },
        dialogPage: {
            dialogsData: [
                { id: 1, name: 'Maria' },
                { id: 2, name: 'Sebastian' },
                { id: 3, name: 'Jora' },
                { id: 4, name: 'Luda' }
            ],

            messageData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'I want a cake' },
                { id: 3, message: 'Will you go to the zoo?' },
                { id: 4, message: 'Bye' }
            ],

            newMessageText: ''
        }
    },

    getState() {
        return this._state
    },

    rerenderTree() {

    },

    subscribe(observer) {
        this.rerenderTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this.rerenderTree(this._state)
    }

}

export default store

