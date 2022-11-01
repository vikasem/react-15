import React, { Component } from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { profileUser } from '../../redux/profileReducer';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { withAuthRedirect } from '../HOC/withAuthRedirect.jsx';
import { compose } from 'redux'
class profileClass extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        this.props.profileUser(userId);
    } 

    render () {
        return <Profile {...this.props} profile = {this.props.profile} />
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
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

// let AuthRedirectComponent = withAuthRedirect(profileClass)

// let ProfileContainer = connect(mapStateToProps, {profileUser})(withRouter(AuthRedirectComponent))

export default compose(
    connect(mapStateToProps, {profileUser}),
    withRouter,
    withAuthRedirect)
    (profileClass)