import React from 'react';
import { connect } from 'react-redux';
import MyPosts from './MyPosts.jsx';
import {addPostActionCreator} from '../../../redux/profileReducer'

let mapStateToProps = (state) => {
    return {
    posts: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch( addPostActionCreator(newPostText) );
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer
