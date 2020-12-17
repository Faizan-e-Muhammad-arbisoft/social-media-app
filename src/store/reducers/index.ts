import { combineReducers } from 'redux';
import createPostReducer from 'store/reducers/createPost';
import authReducer from 'store/reducers/auth';


const rootReducer = combineReducers({
    createPost: createPostReducer,
    auth: authReducer
});

export default rootReducer;
