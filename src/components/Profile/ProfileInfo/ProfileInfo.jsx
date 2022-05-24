import React, { Component } from 'react';
import classes from './ProfileInfo.module.css';
let ProfileInfo = () => {
    return (
        <div>
            <img className = {classes.panorama} src='https://c.wallhere.com/photos/84/7f/1600x900_px_landscape-1057343.jpg!d' />
            <div className={classes.discriptionBlock}>
                ava+content
            </div>
        </div>
    );
}

export default ProfileInfo