import React, { Component } from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
let Profile = (props) => {
    return (
        <div>
    
            <ProfileInfo 
            isOwner = {props.isOwner} 
            profile = {props.profile}
            status = {props.status} 
            updateStatus = {props.updateStatus} 
            savePhoto = {props.savePhoto}
            saveProfile = {props.saveProfile} />
            <MyPostsContainer />

        </div>
    );
}

export default Profile