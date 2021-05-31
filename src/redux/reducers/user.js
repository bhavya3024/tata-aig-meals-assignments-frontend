import { createAction, createReducer } from "@reduxjs/toolkit";
import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
} from "../actions";

const signUp = createAction(SIGNUP);
const signUpSuccess = createAction(SIGNUP_SUCCESS);
const signUpError = createAction(SIGNUP_ERROR);
const login = createAction(LOGIN);
const loginSuccess = createAction(LOGIN_SUCCESS);
const loginError = createAction(LOGIN_ERROR);


const userReducer = createReducer({}, (builder) => {
  builder.addCase(signUp, (state, action) => {
    state = {};
    Object.assign(state, { ...action.payload });
    return state;
  });
  builder.addCase(signUpSuccess, (state, action) => {
    state = {};
    Object.assign(state, { ...action });
    return state;
  });
  builder.addCase(signUpError, (state, action) => {
    state = {};
    Object.assign(state, { ...action });
    return state;
  });
  builder.addCase(login, (state, action) => {
    state = {};
    Object.assign(state, { ...action.payload });
    return state;
  });
  builder.addCase(loginSuccess, (state, action) => {
    state = {};
    Object.assign(state, {
      ...action,
    });
    return state;
  });
  builder.addCase(loginError, (state, action) => {
    state = {};
    Object.assign(state, {
      ...action,
    });
    return state;
  });
});

export default userReducer;
