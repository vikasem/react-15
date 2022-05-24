import React, { Component } from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
let Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />

        </div>
    );
}

export default Profile