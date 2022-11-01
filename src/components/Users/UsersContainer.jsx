import { connect } from 'react-redux';
import { follow, unfollow, setIsFollowing, getUsers } from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader';
import { withAuthRedirect } from '../HOC/withAuthRedirect.jsx';
import { compose } from 'redux'

class usersClass extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p) => {
        this.props.getUsers(p, this.props.pageSize)
    }

    render() {
        return <> {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount = {this.props.totalUsersCount}
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        onPageChanged = {this.onPageChanged}
        unfollow = {this.props.unfollow}
        follow = {this.props.follow}
        users = {this.props.users}
        followingInProgress = {this.props.followingInProgress}/>
        </>
    }
    
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

// let AuthRedirectComponent = withAuthRedirect(usersClass)

// let UsersContainer = connect(mapStateToProps, {follow, unfollow, setIsFollowing, getUsers })(AuthRedirectComponent)

export default compose(
    connect(mapStateToProps, {follow, unfollow, setIsFollowing, getUsers }),
    withAuthRedirect
)(usersClass)