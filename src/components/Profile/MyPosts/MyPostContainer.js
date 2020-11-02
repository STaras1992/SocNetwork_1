import React from 'react';
import {addPost, updateNewPostText} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToPros = (dispatch) => {
    return {
        addNewPost: (post) => {dispatch(addPost(post));}
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToPros)(MyPosts);

export default MyPostsContainer;