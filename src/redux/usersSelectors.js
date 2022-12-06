import { createSelector } from "reselect"

export const getAllUsers = (state) => {
    return state.usersPage.users
}

//сложный селектор без использования библиотеки 

export const getUsersSelector = (state) => {
    return getAllUsers(state).filter(u => true)
}

//сложный селектор без использования с использованием библиотеки 

export const getUsersSuperSelector = createSelector(getAllUsers, (users) => {
    return users.filter(u => true)
})

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}