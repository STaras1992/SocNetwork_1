import React from 'react';
import Post from './Post/Post.jsx';
import styles from './MyPosts.module.css'
import {Field, reduxForm} from "redux-form";
import {requiredField, maxLengthCreator, MaxLength10, maxLength} from "../../../utils/Validators/validator";
import {TextArea} from "../../Common/formsControlls/formsControlls";

const maxLength10 = maxLengthCreator(10);

const newPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPost'} component={TextArea} placeholder={'enter post'} validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <button name={'addPostButton'}>Add post</button>
            </div>
        </form>
    );
}

const PostReduxForm = reduxForm({form: 'newPost'})(newPostForm);

const MyPosts = (props) => {
    let postElements = props.posts.map(data => <Post message={data.message} key={data.id} likes={data.likes}/>);

    let addNewPost = (values) => {
        props.addNewPost(values.newPost);
    }
    return (
        <div className={styles.postsBlock}>
            <h2>My posts:</h2>
            <PostReduxForm onSubmit={addNewPost}/>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;