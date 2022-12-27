import { usersApi } from "../api/api";

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'

type UserType = {
    id: number
    name: string
    status: string
    photos: { large: string, small: string }
    followed: boolean
}

type InitialStateType = {
    users: Array<UserType>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: any
}

let initialState: InitialStateType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        }
        case SET_USERS: {

            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {

            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {

            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING: {

            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: number) => id != action.userId)
            }
        }
        default:
            return state

    }

}

type FollowActionType = {
    type: typeof FOLLOW
    userId: number
}
type UnFollowActionType = {
    type: typeof UNFOLLOW
    userId: number
}
type SetUsersActionType = {
    type: typeof SET_USERS
    users: any
}
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type SetTotalCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
type SetIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type SetIsFollowingActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export let followSuccess = (userId: number): FollowActionType => ({ type: FOLLOW, userId })
export let unfollowSuccess = (userId: number): UnFollowActionType => ({ type: UNFOLLOW, userId })
export let setUsers = (users: any): SetUsersActionType => ({ type: SET_USERS, users })
export let setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage })
export let setTotalCount = (totalUsersCount: number): SetTotalCountActionType => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export let setIsFetching = (isFetching: boolean): SetIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })
export let setIsFollowing = (isFetching: boolean, userId: number): SetIsFollowingActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export let getUsers = (currentPage: any, pageSize: any) => async (dispatch: any) => {
    dispatch(setIsFetching(true))
    let data = await usersApi.getUsers(currentPage, pageSize)
    dispatch(setCurrentPage(currentPage));
    dispatch(setIsFetching(false))
    dispatch(setUsers(data.items))
    let amount = data.totalCount 
    dispatch(setTotalCount(amount))
}

export let unfollow = (userId: any) => async (dispatch: any) => {
    dispatch(setIsFollowing(true, userId))
    let data = await usersApi.userDelete(userId)
    if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
    }
    dispatch(setIsFollowing(false, userId))
}

export let follow = (userId: any) => async (dispatch: any) => {
    dispatch(setIsFollowing(true, userId))
    let data = await usersApi.userPost(userId)
    if (data.resultCode === 0) {
        dispatch(followSuccess(userId))
    }
    dispatch(setIsFollowing(false, userId))
}

export default usersReducer