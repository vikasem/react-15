import React from 'react';
import { connect } from 'react-redux';
import { userAuthorization, logout } from '../../redux/authReducer';
import Header from './Header';

// class HeaderContainer extends React.Component {
//     componentDidMount() {
//         this.props.userAuthorization()
//     }

//     render() {
//         return <Header {...this.props} />
//     }
// }
let HeaderContainer = (props) => {
    return (
        <Header {...props} />
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {userAuthorization, logout})(HeaderContainer);