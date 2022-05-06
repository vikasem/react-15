import React, { Component } from 'react';
import classes from './Profile.module.css';
let Profile = () => {
    return (
        <div className={classes.content}>
            <img src='https://c.wallhere.com/photos/84/7f/1600x900_px_landscape-1057343.jpg!d' />
            <div>
                ava+content
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div className={classes.item}>
                        post1
                    </div>
                    <div className={classes.item}>
                        post2
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Profile