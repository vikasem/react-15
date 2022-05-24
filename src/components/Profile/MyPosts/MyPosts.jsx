import React, { Component } from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
let MyPosts = () => {
    let postData = [
        {message: 'Привет, меня зовут Вика', count:10 },
        {message: 'Это мой первый пост', count:15 }
    ]

    let postsElements = postData.map(post => <Post message={post.message} count={post.count} />)
    return (
            <div className={classes.changeBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                    <textarea></textarea>
                    </div>
                    <div>
                    <button>Add post</button>
                    </div>
                </div>
                <div className={classes.post}>
                    {postsElements}
                </div>
            </div>
    );
}

export default MyPosts
