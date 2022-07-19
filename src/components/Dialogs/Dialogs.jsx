import React, { Component } from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogReducer';
import classes from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem.jsx'
import Message from './Message/Message.jsx'


let Dialogs = (props) => {
    debugger;

    let state = props.store.getState().dialogPage

    let dialogsData = state.dialogsData;
    let messageData = state.messageData;

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = messageData.map(message => <Message message={message.message} id={message.id} />)

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onPostChange = (e) => {
        let message = e.target.value;
        props.store.dispatch(updateMessageActionCreator(message))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea value = {props.state.newMessageText} onChange = {onPostChange}></textarea>
                <button onClick={ addMessage }>Отправить</button>
            </div>
        </div>
    );

}

export default Dialogs