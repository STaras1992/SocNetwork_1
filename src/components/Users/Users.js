import React from 'react'
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage,onPageChange,totalUsers,pageSize,...props}) => {

    let usersElements = props.users.map((user) => (
        <User key={user.id} user={user} isFollowingInProgress={props.isFollowingInProgress} followUser = {props.followUser} unFollowUser={props.unFollowUser}/>
    ));

    return (
        <div>
            <Paginator currentPage={currentPage} onPageChange={onPageChange} totalItemsCount = {totalUsers} pageSize = {pageSize}/>
            {usersElements}
        </div>
    );
}

export default Users;