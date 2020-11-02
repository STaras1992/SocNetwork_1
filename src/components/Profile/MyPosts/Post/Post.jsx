import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.avatar}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlZzM8Ndk6l5jwXsj19jVFdJyS7NPHIe5KYA&usqp=CAU'/>
                {props.message}
            </div>
            <div>
                <p>{'likes: '+props.likes}</p>
            </div>
        </div>
    );
}

export default Post;