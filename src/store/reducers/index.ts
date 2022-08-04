import {combineReducers} from 'redux';
import userReducer from './userReducer';

const appReducer = combineReducers({
  userReducer,
});

export default appReducer;

export type RootState = ReturnType<typeof appReducer>;
