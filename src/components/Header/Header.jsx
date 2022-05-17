import React, { Component } from 'react';
import classes from './Header.module.css';
let Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://cdn.pixabay.com/photo/2018/03/27/15/05/logo-3266214_1280.png'></img>
        </header>
    );
}

export default Header