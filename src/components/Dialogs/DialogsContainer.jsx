import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogReducer.ts';
import Dialogs from './Dialogs.jsx'
import { withAuthRedirect } from '../HOC/withAuthRedirect.jsx';
import { compose } from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessageActionCreator: () => {
            dispatch(addMessageActionCreator());
        },

        updateMessageActionCreator: (e) => {
            let message = e.target.value;
            dispatch(updateMessageActionCreator(message));
        }

    }
}
// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogs)