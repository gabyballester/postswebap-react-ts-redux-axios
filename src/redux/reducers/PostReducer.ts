import {
  GET_POSTS,
  GetPostsStateType,
  PostActionTypes,
} from "../types/PostTypes";

//inicializo el estado de tipo GetPostsStateType
const initialStateGetPosts: GetPostsStateType = {
  posts: [],
};

// función reductora
export const getPostsReducer = (
  state = initialStateGetPosts,
  action: PostActionTypes
): GetPostsStateType => {
  switch (action.type) {
    case GET_POSTS:
      // devuelve el estado más el payload
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
