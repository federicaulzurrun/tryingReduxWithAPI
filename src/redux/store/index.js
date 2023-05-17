import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;
