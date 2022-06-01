import React, { Component } from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

let DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <img className={classes.avatar} src='https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-69.jpg' />
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}



export default DialogItem