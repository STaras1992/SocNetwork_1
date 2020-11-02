import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
    if(!props.profile){
       return <Preloader />;
    }

    return (
        <div>
            {/*<div className={styles.image}>*/}
            {/*    <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>*/}
            {/*</div>*/}
            <div className={styles.profile}>
                <img src={props.profile.photos.large}/>
            </div>
            <div className={styles.profile}>
                <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status}/>
            </div>
        </div>
    );
}

export default ProfileInfo;