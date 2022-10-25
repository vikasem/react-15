import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
let Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://cdn.pixabay.com/photo/2018/03/27/15/05/logo-3266214_1280.png'></img>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login: 
                <NavLink to='/login'>
                    Login
                </NavLink>}
                
            </div>
        </header>
    );
}

export default Header