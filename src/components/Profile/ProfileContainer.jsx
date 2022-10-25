import React, { Component } from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { setProfileUser } from '../../redux/profileReducer';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { profileApi } from '../../api/api.js';
class profileClass extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId){
            userId = 2;
        }
        profileApi.infoUser(userId)
        .then(data => {
            this.props.setProfileUser(data)
        })
    } 

    render () {
        return <Profile {...this.props} profile = {this.props.profile} />
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

let ProfileContainer = connect(mapStateToProps, {setProfileUser})(withRouter(profileClass))

export default ProfileContainer