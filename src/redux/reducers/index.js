import { combineReducers } from "redux";
import UserReducer from './user';
import MealReducer from './meal';

export default combineReducers({ UserReducer, MealReducer });
