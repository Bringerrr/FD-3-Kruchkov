import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import PostReducer from './PostReducer'
import UserReducer from './UserReducer';
import UserInfoReducer from './UserInfoReducer';
import OtherPostReducer from './OtherPostReducer';

const rootReducer = combineReducers({
  form: formReducer,
  other: OtherPostReducer,
  posts: PostReducer,
  user: UserReducer,
  userInfo: UserInfoReducer,
});

export default rootReducer;