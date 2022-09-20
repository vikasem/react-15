import React, { Component } from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem.jsx'
import Message from './Message/Message.jsx'


let Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key = {dialog.id} id={dialog.id} />)

    let messagesElements = state.messageData.map(message => <Message message={message.message} key = {message.id} id={message.id} />)

    let onAddMessage = () => {
        props.addMessageActionCreator();
    }

    let onPostChange = (e) => {
        props.updateMessageActionCreator(e);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea value = {state.newMessageText} onChange = {onPostChange}></textarea>
                <button onClick={ onAddMessage }>Отправить</button>
            </div>
        </div>
    );

}

export default Dialogs