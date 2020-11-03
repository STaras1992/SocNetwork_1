import React from 'react'
import styles from "./Users.module.css";
import userPhoto from '../../assets/user.png';
import {NavLink} from "react-router-dom";

const User = ({user,isFollowingInProgress,followUser,unFollowUser}) => (
    <div className={styles.user}>
            <span>
                <div className={styles.avatar}>
                    <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed
                            ? <button disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                                followUser(user.id)
                            }}
                            >unfollow</button>

                            : <button disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                                unFollowUser(user.id)
                            }}
                            >follow</button>
                    }
                </div>
            </span>
        <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
            </span>
    </div>
)

export default User;