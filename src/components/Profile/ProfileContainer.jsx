import React, { Component } from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { setProfileUser } from '../../redux/profileReducer';
import axios from 'axios';

class profileClass extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
        .then(response => {
            this.props.setProfileUser(response.data)
        })
    } 

    render () {
        return <Profile {...this.props} profile = {this.props.profile} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let ProfileContainer = connect(mapStateToProps, {setProfileUser})(profileClass)

export default ProfileContainer