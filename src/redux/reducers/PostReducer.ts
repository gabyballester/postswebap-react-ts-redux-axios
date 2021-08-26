import {
  GET_POSTS,
  REMOVE_POST,
  UPDATE_POST,
  PostsStateType,
  PostActionTypes,
} from "../types/PostTypes";

import { Post } from "../interfaces/PostInterface";

//inicializo el estado de tipo GetPostsStateType
const initialStateGetPosts: PostsStateType = {
  posts: [],
};

// función reductora
export const getPostsReducer = (
  state = initialStateGetPosts,
  action: PostActionTypes
): PostsStateType => {
  switch (action.type) {
    case GET_POSTS:
      // devuelve el estado más el payload
      return {
        ...state,
        posts: action.payload,
      };
    case REMOVE_POST:
      const newPostArray: Post[] = state.posts.filter(
        (post) => post.id !== action.payload
      );
      return {
        ...state,
        posts: newPostArray,
      };
    case UPDATE_POST:
      const postArrayBeforeUpdate: Post[] = state.posts.map(
        (post) => post.id !== action.payload.id ? post:  post = action.payload
      );

      return {
        ...state,
        posts: postArrayBeforeUpdate
      };

    default:
      return state;
  }
};
