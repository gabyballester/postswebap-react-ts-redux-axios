// importo los tipos get posts y post action types
import { GET_POSTS, REMOVE_POST, PostActionTypes } from '../types/PostTypes';
// importo el interfaz de 1 post
import { Post } from '../interfaces/PostInterface';

// getPostsAction acepta un tipo array de post
// a su vez le digo que es un tipo postactiontypes
export const getPostsAction=(posts: Post[]): PostActionTypes => {
  //devuelve el tipo getposts y payload posts
  return {
    type: GET_POSTS,
    payload: posts
  };
};

export const removePostAction=(postid: number): PostActionTypes => {
  //devuelve el tipo getposts y payload posts
  return {
    type: REMOVE_POST,
    postid
  };
};

