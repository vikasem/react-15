import React, { Component } from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
let Profile = (props) => {
    return (
        <div>
    
            <ProfileInfo profile = {props.profile}/>
            <MyPostsContainer />

        </div>
    );
}

export default Profile