import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from '../../../assets/user.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {Input} from "../../Common/formsControlls/formsControlls";


const ProfileInfo = (props) => {
    if(!props.profile){
       return <Preloader />;
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={styles.profile}>
                <img src={props.profile.photos.large || userPhoto}/>
            </div>
            {props.isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
            <div className={styles.profile}>
                <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status}/>
            </div>
        </div>
    );
}

export default ProfileInfo;