import { Dispatch } from 'redux';
import * as actionTypes from 'store/actions/actionTypes';

export const createPost = (title: string, place: string, description: string, owner: string) => (
  dispatch: Dispatch<actionTypes.CreatePostDispatchTypes>
) => {
  try {
    dispatch({
      type: actionTypes.CREATE_POST_START,
    });

    const post = {
      title: title,
      place: place,
      description: description,
      owner: owner,
      comments: [],
    };

    dispatch({
      type: actionTypes.CREATE_POST_SUCCESS,
      payload: post,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.CREATE_POST_FAILED,
    });
  }
};

export const addComment = (user: string, commentString: string, postIndex: number) => (
  dispatch: Dispatch<actionTypes.AddCommentDispatchTypes>
) => {
  try {
    dispatch({
      type: actionTypes.ADD_COMMENT_START,
    });

    const commentData = {
      user: user,
      comment: commentString,
      postIndex: postIndex,
    };

    dispatch({
      type: actionTypes.ADD_COMMENT_SUCCESS,
      payload: commentData,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.ADD_COMMENT_FAILED,
    });
  }
};
