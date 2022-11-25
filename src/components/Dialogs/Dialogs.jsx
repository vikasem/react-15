import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utills/validators';
import { Textarea } from '../common/FormsControls';
import classes from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem.jsx'
import Message from './Message/Message.jsx'

let Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)

    let messagesElements = state.messageData.map(message => <Message message={message.message} key={message.id} id={message.id} />)

    let addNewMessage = (values) => {
        props.addMessageActionCreator(values.newMessageText);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <AddMessageFormRedax onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

let maxLength180 = maxLengthCreator(20)

let AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newMessageText'}
            validate={[required, maxLength180]}></Field>
            <button>Отправить</button>
        </form>
    )
};

let AddMessageFormRedax = reduxForm({form:"dialogAddMessage"})(AddMessageForm);


export default Dialogs