import React, { Component } from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
let MyPosts = () => {
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div>
                    <Post message='Привет, меня зовут Вика' count="10"/>
                    <Post message='Это мой первый пост' count="15"/>
                </div>
            </div>
    );
}

export default MyPosts
