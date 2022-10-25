import React from 'react';
import { connect } from 'react-redux';
import { headerApi } from '../../api/api';
import { setAuthUserData } from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        headerApi.meInfo()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);