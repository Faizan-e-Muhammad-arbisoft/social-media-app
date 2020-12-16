import { Dispatch } from 'redux';
import * as actionTypes from 'store/actions/actionTypes';


export const createPost = ( title: string, place: string, description: string, owner: string ) =>
    (dispatch: Dispatch<actionTypes.CreatePostDispatchTypes>) => {

    try {
        dispatch({
          type: actionTypes.CREATE_POST_START
        })
    
        const post = {
            title: title,
            place: place,
            description: description,
            owner: owner
        }

        dispatch({
          type: actionTypes.CREATE_POST_SUCCESS,
          payload: post
        })
    
      } catch(e) {
        dispatch({
          type: actionTypes.CREATE_POST_FAILED,
        })
      }
};
