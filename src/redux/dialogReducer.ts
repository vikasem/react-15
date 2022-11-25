const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

type dialogsDataType = {
    id: number
    name: string
}

type messageDataType = {
    id: number
    message: string
}

type InitislStateType = {
    dialogsData: Array<dialogsDataType>
    messageData: Array<messageDataType>
    newMessageText: string
}

let initialState:InitislStateType = {
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

let dialogReducer = (state = initialState, action: any):InitislStateType => {
    switch(action.type){
        case ADD_MESSAGE:
            return {
                ...state,
                messageData: [...state.messageData, { id: 5, message: action.newMessageText }]
            }
        default:
            return state
        
    }
}

type AddMessageActionType = {
    type: typeof ADD_MESSAGE
    newMessageText: string
}

export let addMessageActionCreator = (newMessageText: string):AddMessageActionType => ({type: ADD_MESSAGE, newMessageText})


export default dialogReducer