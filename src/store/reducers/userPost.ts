import * as actionTypes from 'store/actions/actionTypes';
import { IPost, IComment } from 'types';
import { initialState } from 'store/reducers/initialState';

const reducer = (
  state = initialState,
  action: actionTypes.CreatePostDispatchTypes | actionTypes.AddCommentDispatchTypes
) => {
  switch (action.type) {
    case actionTypes.CREATE_POST_SUCCESS:
      const newPost: IPost = {
        title: action.payload.title,
        place: action.payload.place,
        description: action.payload.description,
        owner: action.payload.owner,
        comments: action.payload.comments,
      };
      return {
        ...state,
        posts: state.posts.concat(newPost),
        loading: false,
      };
    case actionTypes.CREATE_POST_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.CREATE_POST_FAILED:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.ADD_COMMENT_SUCCESS:
      const newComment: IComment = {
        user: action.payload.user,
        comment: action.payload.comment,
      };
      const newPosts = [...state.posts];
      newPosts[action.payload.postIndex] = {
        ...newPosts[action.payload.postIndex],
        comments: state.posts[action.payload.postIndex].comments.concat(newComment),
      };
      return {
        ...state,
        posts: newPosts,
        loading: false,
      };
    case actionTypes.ADD_COMMENT_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.ADD_COMMENT_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
