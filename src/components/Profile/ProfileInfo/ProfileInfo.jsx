import React, { Component } from 'react';
import Preloader from '../../common/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatusFunc';
import userPhoto from '../../../assets/images/no_avatar.jpg'
import { useState } from 'react';
import ProfileBlockFormReduxForm from './ProfieBlockForm';

let ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />

    }
    let mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    let onSubmit = (formData) =>{
        console.log(formData)
        // console.log(props.profile.contacts)
        // props.saveProfile(formData)
        // setEditMode(false)
        props.saveProfile(formData).then(
            ()=>{
                setEditMode(false)
            }
        )
        
    }
    return (
        <div>
            {/* <img className = {classes.panorama} src='https://c.wallhere.com/photos/84/7f/1600x900_px_landscape-1057343.jpg!d' /> */}
            <div className={classes.discriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={classes.noAvatar} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                <div>
                    {props.isOwner && <div><b>Add a photo</b>: <input type={"file"} onChange={mainPhotoSelected} /></div>}
                </div>
                {editMode 
                ? <ProfileBlockFormReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> 
                : <ProfileBlock profile = {props.profile} goToEditMode = {()=>{setEditMode(true)}} isOwner = {props.isOwner}/> }
            </div>
        </div>
    );
}

let ProfileBlock = (props) => {
    return (
        <div>
            <div>
                {props.isOwner && <button onClick={props.goToEditMode}>Edit</button>}
            </div>
            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About Me</b>: {props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}



let Contact = (props) => {
    return (
        <div className={classes.contacts}><b>{props.contactTitle}</b>: {props.contactValue}</div>
    )
}

export default ProfileInfo