import { IPost } from 'types';


export const CREATE_POST_START = 'CREATE_POST_START';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILED = 'CREATE_POST_FAILED';

export interface CreatePostStart {
    type: typeof CREATE_POST_START
};
  
export interface CreatePostSuccess {
    type: typeof CREATE_POST_SUCCESS,
    payload: IPost
};
  
export interface CreatePostFailed {
    type: typeof CREATE_POST_FAILED
};

export type CreatePostDispatchTypes = CreatePostStart | CreatePostSuccess | CreatePostFailed;
