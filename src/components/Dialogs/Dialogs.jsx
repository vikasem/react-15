import React, { Component } from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

let DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

let Message = (props) => {
    return (
        <div>
             {props.message}
        </div>
    );
}


let Dialogs = () => {
    let dialogsData = [
        {id: 1, name:'Maria'},
        {id: 2, name:'Sebastian'},
        {id: 3, name:'Jora'},
        {id: 4, name:'Luda'}
    ]

    let messageData = [
        {id: 1, message:'Hi'},
        {id: 2, message:'I want a cake'},
        {id: 3, message:'Will you go to the zoo?'},
        {id: 4, message:'Bye'}
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = messageData.map(message => <Message message={message.message} id={message.id} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );

}

export default Dialogs