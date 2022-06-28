const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

let dialogReducer = (state, action) => {
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