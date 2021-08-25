import { Post } from "../interfaces/PostInterface";

// constante de acción
export const GET_POSTS = "GET_POSTS";
export const REMOVE_POST = "REMOVE_POST"

export interface PostsStateType {
  posts: Post[];
}

export interface DeletePostStateType {
  postid: string;
  payload: Post
}

//interfaz del action type para el post
interface PostsActionType {
  type: typeof GET_POSTS;
  payload: Post[];
}

interface DeletePostActionType {
  type: typeof REMOVE_POST;
  postid: number;
}

// tipo de acción para los post
export type PostActionTypes = PostsActionType | DeletePostActionType;
