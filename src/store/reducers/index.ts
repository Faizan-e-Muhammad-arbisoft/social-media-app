import { combineReducers } from 'redux';
import userPostReducer from 'store/reducers/userPost';
import authReducer from 'store/reducers/auth';

const rootReducer = combineReducers({
  userPost: userPostReducer,
  auth: authReducer,
});

export default rootReducer;
