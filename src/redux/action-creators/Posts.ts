import {
  getPostsAction,
  removePostAction,
  updatePostAction,
} from "../actions/PostActions";
import { Dispatch } from "redux";
import { PostActionTypes } from "../types/PostTypes";
import { PostService } from "../../services/PostService";
import { Post } from "../interfaces/PostInterface";

export const getPosts = () => {
  return async function (dispatch: Dispatch<PostActionTypes>) {
    try {
      const { data } = await PostService.getAll();
      dispatch(getPostsAction(data));
    } catch (error) {
      console.log(error);
      return error;
    }
  };
};

export const removePost = (postid: number) => {
  return async function (dispatch: Dispatch<PostActionTypes>) {
    try {
      dispatch(removePostAction(postid));
    } catch (error) {
      console.log(error);
      return error;
    }
  };
};

export const updatePost = (post: Post) => {
  return async function (dispatch: Dispatch<PostActionTypes>) {
    try {
      dispatch(updatePostAction(post));
    } catch (error) {
      console.log(error);
      return error;
    }
  };
};
