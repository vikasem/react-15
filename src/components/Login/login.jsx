import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'login'} placeholder = {"login"} />
            </div>
            <div>
                <Field component={'input'} name={'password'} placeholder = {"password"} />
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type = {"checkbox"} />remember me
            </div>
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
    }
    return (
        <div>
        <h1>LOGGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login