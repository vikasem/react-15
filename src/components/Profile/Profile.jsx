import React, { Component } from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import classes from './Profile.module.css';
let Profile = () => {
    return (
        <div>
            <img className={classes.panorama} src='https://c.wallhere.com/photos/84/7f/1600x900_px_landscape-1057343.jpg!d' />
            <div>
                ava+content
            </div>
            <MyPosts />

        </div>
    );
}

export default Profile