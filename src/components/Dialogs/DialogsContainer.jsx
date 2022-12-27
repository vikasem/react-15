import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../redux/dialogReducer.ts';
import Dialogs from './Dialogs.jsx'
import { withAuthRedirect } from '../HOC/withAuthRedirect.jsx';
import { compose } from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addMessageActionCreator: (newMessageText) => {
//             dispatch(addMessageActionCreator(newMessageText));
//         }
//     }
// }

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
    )(Dialogs)