import React, { Component, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { userAuthorization } from './redux/authReducer';
import Preloader from './components/common/Preloader';

const App = (props) => {
  useEffect(() => {
    props.initializeApp()
  }, [])

  if (!props.initialized) {
    return <Preloader />
  }

  // useEffect(() => {
  //   props.userAuthorization()
  // }, [])
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path='/profile' element={<ProfileContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>

  );
}

let mapStateToProps = (state) => (
  {
    initialized: state.app.initialized
  }
)

let AppContainer = connect(mapStateToProps, { initializeApp, userAuthorization })(App)

export default AppContainer;
