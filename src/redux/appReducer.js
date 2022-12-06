import { userAuthorization } from './authReducer'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

let initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export let initializeApp = () => (dispatch) => {
    let promise = dispatch(userAuthorization());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        }
    )
}

export default appReducer