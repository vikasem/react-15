import React, { Component } from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
let MyPosts = (props) => {
    let postData = props.post
    let postsElements = postData.map(post => <Post message={post.message} count={post.count} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        console.log(props.post);
    }

    return (
            <div className={classes.changeBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                    <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                    <button onClick={ addPost }>Add post</button>
                    </div>
                </div>
                <div className={classes.post}>
                    {postsElements}
                </div>
            </div>
    );
}

export default MyPosts
