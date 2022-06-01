import React, { Component } from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
let Profile = (props) => {
    return (
        <div>
    
            <ProfileInfo />
            <MyPosts post={props.state.postData} addPost={props.addPost}/>

        </div>
    );
}

export default Profile