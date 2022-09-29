import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogReducer from "./dialogReducer.ts"
import profileReducer from "./profileReducer"
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

window.store = store

export default store