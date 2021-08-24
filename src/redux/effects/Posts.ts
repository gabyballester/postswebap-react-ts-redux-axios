import { getPostsAction } from "../actions/PostActions";
import { Dispatch } from "redux";
import { PostActionTypes } from "../types/PostTypes";
import PostService from "../../services/PostService";

export const getPosts = () => {
  return async function (dispatch: Dispatch<PostActionTypes>) {
    try {
      const { data } = await PostService.getAll();
      dispatch(getPostsAction(data));
      // return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
};
