import React, { Component } from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { profileUser, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profileReducer';
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router";
import { withAuthRedirect } from '../HOC/withAuthRedirect.jsx';
import { compose } from 'redux'
import { useEffect } from 'react';

let ProfileContainer = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    let router={ location, navigate, params }
    useEffect(()=> {
        let userId = router.params.userId
        if (!userId){
            userId = props.userId
        }
        props.profileUser(userId);
        props.getStatus(userId)
    },[router.params.userId])
    return (
        <Profile {...props} profile = {props.profile} 
        status = {props.status} 
        updateStatus = {props.updateStatus}
        isOwner = {!router.params.userId}
        savePhoto = {props.savePhoto}
        saveProfile = {props.saveProfile} />
    )
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId
})

export default compose(
    connect(mapStateToProps, {profileUser, getStatus, updateStatus, savePhoto, saveProfile}),
    withAuthRedirect)
    (ProfileContainer)