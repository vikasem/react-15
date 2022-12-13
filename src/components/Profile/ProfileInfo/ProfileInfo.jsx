import React, { Component } from 'react';
import Preloader from '../../common/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatusFunc';
let ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
        
    }
    return (
        <div>
            {/* <img className = {classes.panorama} src='https://c.wallhere.com/photos/84/7f/1600x900_px_landscape-1057343.jpg!d' /> */}
            <div className={classes.discriptionBlock}>
                <img src = {props.profile.photos.large}/>
                <ProfileStatus status = {props.status} updateStatus = {props.updateStatus} />
            </div>
        </div>
    );
}

export default ProfileInfo