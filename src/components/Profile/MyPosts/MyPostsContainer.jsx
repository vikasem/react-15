import React from 'react';
import { connect } from 'react-redux';
import MyPosts from './MyPosts.jsx';
import {addPostActionCreator,updateTextActionCreator} from '../../../redux/profileReducer'

let superMyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch( addPostActionCreator() );
    }
    
    let onPostChange = (text) => {
        let action = updateTextActionCreator(text);
        props.store.dispatch( action )
    }

    return (
            <MyPosts addPost={addPost} updateNewPostText={onPostChange}
            posts={state.profilePage.postData} newPostText={state.profilePage.newPostText} />
    );
}

let mapStateToProps = (state) => {
    return {
    posts: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch( addPostActionCreator() );
        },
        updateNewPostText: (text) => {
            let action = updateTextActionCreator(text);
            dispatch( action );
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer
