const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

let initialState = {
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

let dialogReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            state.messageData.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_MESSAGE:
            state.newMessageText = action.newMessage;
            return state
        default:
            return state
        
    }
    
}

export let addMessageActionCreator = () => ({type: ADD_MESSAGE})

export let updateMessageActionCreator = (message) => ({type: UPDATE_MESSAGE, newMessage: message})

export default dialogReducer