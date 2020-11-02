import React from 'react'
import styles from "./Users.module.css";
import userPhoto from 'C://Users//stas2//react//react-kabzda-kak-prosto//src//assets//user.png';
import {NavLink} from "react-router-dom";
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