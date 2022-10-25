import { connect } from 'react-redux';
import { follow, setCurrentPage, setIsFetching, setTotalCount, setUsers, unfollow, setIsFollowing } from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader';
import { usersApi } from '../../api/api';

class usersClass extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
            let amount = data.totalCount / 200
            this.props.setTotalCount(amount)
        })
    }

    onPageChanged = (p) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(p)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
        })
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
        setIsFollowing = {this.props.setIsFollowing}
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
        followingInProgress: state.usersPage.followingInProgress
    }
}

let UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, 
    setCurrentPage, setTotalCount, setIsFetching, setIsFollowing })(usersClass)

export default UsersContainer