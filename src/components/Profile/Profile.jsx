import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo status={props.status} updateStatus={props.updateUserStatus} profile={props.profile} isOwner={props.isOwner}
            savePhoto={props.saveUserPhoto}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;