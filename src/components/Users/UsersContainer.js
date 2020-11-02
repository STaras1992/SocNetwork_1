import React from 'react'
import {
    follow,
    unFollow,
    setCurrentPage,
    getUsersRequest
} from "../../redux/UsersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowingInProgress,
    getPageSize,
    getTotalUsers, getUsers
} from "../../redux/usersSelectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (page) => {
        this.props.getUsers(page, this.props.pageSize);
        this.props.setCurrentPage(page);
    }

    render() {
        return <>
            <Preloader isFetching={this.props.isFetching}/>
            <Users users={this.props.users} totalUsers={this.props.totalUsers} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} onPageChange={this.onPageChange}
                   followUser = {this.props.follow} unFollowUser = {this.props.unFollow}
                   isFollowingInProgress={this.props.isFollowingInProgress}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsers: getTotalUsers(state),
        currentPage: getCurrentPage(state),
        isFetching:getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state)
    }
}

let mapDispatchToPros = {
    follow,
    unFollow,
    setCurrentPage,
    getUsers: getUsersRequest
};

export default compose (
    connect(mapStateToProps, mapDispatchToPros),
    //withAuthRedirect
)(UsersContainer);

