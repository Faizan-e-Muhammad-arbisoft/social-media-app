import { combineReducers } from 'redux';
import createPostReducer from 'store/reducers/createPost';

const rootReducer = combineReducers({
    createPost: createPostReducer
});

export default rootReducer;
