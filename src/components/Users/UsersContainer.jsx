import { connect } from 'react-redux';
import { follow, setCurrentPage, setIsFetching, setTotalCount, setUsers, unfollow } from '../../redux/usersReducer';
import axios from 'axios';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader';

class usersClass extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
            let amount = response.data.totalCount / 200
            this.props.setTotalCount(amount)
        })
    }

    onPageChanged = (p) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
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
        users = {this.props.users}/>

        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             return dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             return dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             return dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (page) => {
//             return dispatch(setCurrentPageAC(page))
//         },
//         setTotalCount: (totalUsersCount) => {
//             return dispatch(setTotalCountAC(totalUsersCount))
//         },
//         setIsFetching: (isFetching) => {
//             return dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// }

let UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, 
    setCurrentPage, setTotalCount, setIsFetching })(usersClass)

export default UsersContainer