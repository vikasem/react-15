import React, { Component } from 'react';
import classes from './Post.module.css';
let Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://i.pinimg.com/originals/e7/88/04/e78804c9bd6a4647ae626745f2f88b48.jpg' />
            {props.message}
            <div>
                <span>like {props.count}</span>
            </div>
        </div>
    );
}

export default Post;