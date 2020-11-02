import React from 'react';
import Header from "./Header";
import {auth, logout} from "../../redux/AuthReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => (
    {
        // id: state.auth.id,
        // email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
);

let mapDispatchToProps = {
    // auth,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);