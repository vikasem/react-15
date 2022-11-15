import React from 'react'
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";

let mapStateToPropsRedirect = (state) => {
    return {
    isAuth: state.auth.isAuth
    }
}

export let withAuthRedirect = (Component) => {
    let redirectComponent = (props) => {
        if (!props.isAuth) {return <Navigate to='/login' />}
        return <Component {...props} />
    }
    let connectWithAuthRedirect = connect(mapStateToPropsRedirect)(redirectComponent)
    return connectWithAuthRedirect
}

