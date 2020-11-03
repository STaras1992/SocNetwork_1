import React from 'react'
import Profile from "./Profile";
import {
    addPost,
    getUserProfile,
    getUserStatus, savePhoto, saveUserPhoto,
    setUserProfile,
    updateUserStatus
} from "../../redux/ProfileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.loggedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }


    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.userId != this.props.match.params.userId)
           this.refreshProfile();
    }

    render() {
        return (<Profile {...this.props} isOwner={!this.props.match.params.userId}/>)
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        loggedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
};

let mapDispatchToProps = {
    addPost,
    setUserProfile,
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    saveUserPhoto
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

