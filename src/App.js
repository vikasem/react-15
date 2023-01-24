import React, { Component, useEffect, Suspense, lazy } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Routes, Route, Redirect, Navigate } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { userAuthorization } from './redux/authReducer';
import Preloader from './components/common/Preloader';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

let DialogsContainer = React.lazy(()=> import('./components/Dialogs/DialogsContainer'))
let ProfileContainer = React.lazy(()=> import('./components/Profile/ProfileContainer'))

const App = (props) => {
  let catchAllUnhandledError =(reason, promise)=> {
    alert("some error")
  }
  useEffect(() => {
    props.initializeApp()
    window.addEventListener("unhandledrejection",catchAllUnhandledError)
    return () => {
      window.removeEventListener("unhandledrejection",catchAllUnhandledError)
    }
  }, [])

  if (!props.initialized) {
    return <Preloader />
    
  }
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
      <Suspense fallback={<div><Preloader /></div>}>
        <Routes>
          <Route exact path='/' element={<Navigate to={"/profile"}/>} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path='/profile' element={<ProfileContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>404 NOT FOUND</div>} />
        </Routes>
      </Suspense>
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

const MainApp = () => {
  return(
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
  )
}

export default MainApp;
