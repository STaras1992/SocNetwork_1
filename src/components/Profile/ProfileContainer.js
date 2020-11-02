import React from 'react'
import Profile from "./Profile";
import {
    addPost,
    getUserProfile,
    getUserStatus,
    setUserProfile,
    updateUserStatus
} from "../../redux/ProfileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId=this.props.match.params.userId;
        if(!userId){
            userId=this.props.loggedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
           return (<Profile {...this.props} />)
    }
}

let mapStateToProps = (state) =>{
   return{
       profile: state.profilePage.profile,
       status:state.profilePage.status,
       loggedUserId:state.auth.userId,
       isAuth: state.auth.isAuth
   }
};

let mapDispatchToProps = {
    addPost,
    setUserProfile,
    getUserProfile,
    getUserStatus,
    updateUserStatus
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

