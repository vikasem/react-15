import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utills/validators';
import { Textarea } from '../../common/FormsControls';

let MyPosts = (props) => {
    let postData = props.posts
    let postsElements = postData.map(post => <Post message={post.message} count={post.count} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    return (
        <div className={classes.changeBlock}>
            <h3>My posts</h3>
            <NewPostReduxForm onSubmit={onAddPost}/>
            <div className={classes.post}>
                {postsElements}
            </div>
        </div>
    );
}

let maxLength10 = maxLengthCreator(10);

let NewPostTextForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"}
                validate={[required, maxLength10]}></Field>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let NewPostReduxForm = reduxForm({form:"NewMyPost"})(NewPostTextForm)
export default MyPosts
