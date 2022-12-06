import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utills/validators'
import { Input } from '../common/FormsControls'
import { login, logout } from '../../redux/authReducer'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import classes from '../common/FormsControls.module.css'

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'email'} placeholder = {"email"}
                validate={required} />
            </div>
            <div>
                <Field component={Input} name={'password'} placeholder = {"password"} type = {"password"}
                validate={required} />
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type = {"checkbox"} />remember me
            </div>
            {
                props.error && 
                <div className={classes.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm({form:"login"})(LoginForm)

let Login = (props) => {
    let onSubmit = (formData) =>{
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return (
        <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login, logout})(Login)