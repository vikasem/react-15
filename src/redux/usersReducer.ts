const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

type UserType = {
    id: number
    name: string
    status: string
    photos: {large:string, small:string}
    followed: boolean
}

type InitialStateType = {
    users: Array<UserType>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean
}

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false 
}

const usersReducer = (state = initialState, action:any):InitialStateType => {
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
    isFetching:boolean
}

export let follow = (userId:number):FollowActionType => ({ type: FOLLOW, userId })
export let unfollow = (userId:number):UnFollowActionType => ({ type: UNFOLLOW, userId })
export let setUsers = (users:any):SetUsersActionType => ({ type: SET_USERS, users})
export let setCurrentPage = (currentPage:number):SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage})
export let setTotalCount = (totalUsersCount:number):SetTotalCountActionType => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export let setIsFetching = (isFetching:boolean):SetIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})


export default usersReducer