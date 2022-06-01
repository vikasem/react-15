import React, { Component } from 'react';
import classes from './../Dialogs.module.css';

let Message = (props) => {
    return (
        <div>
             {props.message}
        </div>
    );
}



export default Message