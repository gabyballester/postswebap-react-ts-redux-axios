import { getPostsAction } from "../actions/PostActions";
import { Dispatch } from "redux";
import { PostActionTypes } from "../types/PostTypes";
import axiosClient from "../../config/axiosConfig";

export const getPosts = () => {
  return async function (dispatch: Dispatch<PostActionTypes>) {
    const { data } = await axiosClient.get("/posts");
    dispatch(getPostsAction(data));
    return data;
  };
};
