let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Привет, меня зовут Вика', count:10 },
                {id: 2, message: 'Это мой первый пост', count:15 }
            ],
    
            newPostText: 'hello'
        },
        dialogPage: {
            dialogsData: [
                {id: 1, name:'Maria'},
                {id: 2, name:'Sebastian'},
                {id: 3, name:'Jora'},
                {id: 4, name:'Luda'}
            ],
        
            messageData: [
                {id: 1, message:'Hi'},
                {id: 2, message:'I want a cake'},
                {id: 3, message:'Will you go to the zoo?'},
                {id: 4, message:'Bye'}
            ]
        }
    },

    getState() {
        return this._state
    },

    rerenderTree () {

    },

    addPost(){
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            count: 1
        }
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostText =''
        this.rerenderTree(this._state)
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this.rerenderTree(this._state)
    },

    subscribe (observer) {
        this.rerenderTree = observer;
    }

}

export default store

