import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogReducer';
import Dialogs from './Dialogs.jsx'

let superDialogsContainer = (props) => {

    let state = props.store.getState().dialogPage

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onPostChange = (e) => {
        let message = e.target.value;
        props.store.dispatch(updateMessageActionCreator(message))
    }

    return (<Dialogs addMessageActionCreator={addMessage} updateMessageActionCreator={onPostChange}
        dialogPage={state} />);

}

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
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

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer