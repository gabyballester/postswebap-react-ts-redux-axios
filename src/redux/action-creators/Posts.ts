import { getPostsAction, removePostAction } from "../actions/PostActions";
import { Dispatch } from "redux";
import { PostActionTypes } from "../types/PostTypes";
import { PostService } from "../../services/PostService";

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