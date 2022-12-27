import React from 'react';
import { connect } from 'react-redux';
import MyPosts from './MyPosts.jsx';
import { addPost } from '../../../redux/profileReducer'

let mapStateToProps = (state) => {
    return {
    posts: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
    }
}

let MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsContainer
