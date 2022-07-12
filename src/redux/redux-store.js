import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogReducer from "./dialogReducer"
import profileReducer from "./profileReducer"

let reducers = combineReducers({
    profilePage: dialogReducer,
    dialogPage: profileReducer
})

let store = createStore(reducers);

export default store