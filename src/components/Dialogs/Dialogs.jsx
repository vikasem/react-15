import React, { Component } from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem.jsx'
import Message from './Message/Message.jsx'


let Dialogs = (props) => {
    let dialogsData = props.state.dialogsData;
    let messageData = props.state.messageData;

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = messageData.map(message => <Message message={message.message} id={message.id} />)

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea ref = {newMessage}></textarea>
                <button onClick={ addMessage }>Отправить</button>
            </div>
        </div>
    );

}

export default Dialogs