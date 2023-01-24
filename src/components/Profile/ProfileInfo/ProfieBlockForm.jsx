import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormsControls'
import classes from './ProfileInfo.module.css';
import s from '../../common/FormsControls.module.css'


let ProfileBlockForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {
                props.error && 
                <div className={s.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Save</button>
            </div>
            <div>
                <b>Full name</b>: <Field placeholder='Full name' name='fullName' component={Input}></Field>
            </div>
            <div>
                <b>Looking for a job</b>: <Field name='lookingForAJob' component={Input} type="checkbox"></Field>
            </div>
            <div>
                <b>My professional skills</b>: <Field placeholder='Skills' name='lookingForAJobDescription' component={Textarea} ></Field>
            </div>
            <div>
                <b>About Me</b>: <Field placeholder='About Me' name='aboutMe' component={Textarea} ></Field>
            </div>
            <div>
                <b>Contacts</b>: { Object.keys(props.profile.contacts).map(key => {
                    return (<div className={classes.contacts}>
                        <b> {key}: {<Field placeholder={key} name={'contacts.'+key} component={Input}></Field>}</b>
                    </div>)
                })}
            </div>
        </form>
    )
}

let ProfileBlockFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileBlockForm)

export default ProfileBlockFormReduxForm