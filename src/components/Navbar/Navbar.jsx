import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
let Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink  to='/dialogs'>Message</NavLink>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}> 
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar