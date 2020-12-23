import { IPost } from 'types';

// ActionTypes for Create Post
export const CREATE_POST_START = 'CREATE_POST_START';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILED = 'CREATE_POST_FAILED';

export interface CreatePostStart {
  type: typeof CREATE_POST_START;
}

export interface CreatePostSuccess {
  type: typeof CREATE_POST_SUCCESS;
  payload: IPost;
}

export interface CreatePostFailed {
  type: typeof CREATE_POST_FAILED;
}

export type CreatePostDispatchTypes = CreatePostStart | CreatePostSuccess | CreatePostFailed;

// ActionTypes for Add Comment
export const ADD_COMMENT_START = 'ADD_COMMENT_START';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILED = 'ADD_COMMENT_FAILED';

export interface AddCommentStart {
  type: typeof ADD_COMMENT_START;
}

export interface AddCommentSuccess {
  type: typeof ADD_COMMENT_SUCCESS;
  payload: any;
}

export interface AddCommentFailed {
  type: typeof ADD_COMMENT_FAILED;
}

export type AddCommentDispatchTypes = AddCommentStart | AddCommentSuccess | AddCommentFailed;

// ActionsTypes for Auth
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export interface AuthStart {
  type: typeof AUTH_START;
}

export interface AuthSuccess {
  type: typeof AUTH_SUCCESS;
}

export interface AuthFailed {
  type: typeof AUTH_FAILED;
}

export interface AuthLogout {
  type: typeof AUTH_LOGOUT;
}

export type AuthDispatchTypes = AuthStart | AuthSuccess | AuthFailed | AuthLogout;
