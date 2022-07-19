import React from 'react';
import MyPosts from './MyPosts.jsx';
import {addPostActionCreator,updateTextActionCreator} from '../../../redux/profileReducer'

let MyPostsContainer = (props) => {
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

export default MyPostsContainer
