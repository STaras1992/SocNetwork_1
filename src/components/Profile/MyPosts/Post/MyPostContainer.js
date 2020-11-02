import React from 'react';
import MyPosts from "../MyPosts";
import {addPost, updateNewPostText} from "../../../../redux/ProfileReducer";

const MyPostsContainer = (props) => {

let updateNewPostText= (text) =>{
    props.store.dispatch(updateNewPostText(text))
}

let addNewPost = () => {
    props.store.dispatch(addPost());
}

    return (<MyPosts posts={props.store.getState().profilePage.posts} newPostText={props.store.getState().profilePage.newPostText}
                     updateNewPostText={updateNewPostText} addNewPost={addNewPost}/>);
}

export default MyPostsContainer;