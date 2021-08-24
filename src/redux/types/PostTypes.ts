import { Post } from "../interfaces/PostInterface";

// constante de acción
export const GET_POSTS = "GET_POSTS";

export interface GetPostsStateType {
  posts: Post[];
}

//interfaz del action type para el post
interface GetPostsActionType {
  type: typeof GET_POSTS;
  payload: Post[];
}

// tipo de acción para los post
export type PostActionTypes = GetPostsActionType;
