import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  SIGNUP,
  signUpError,
  signUpSuccess,
  LOGIN,
  loginSuccess,
  loginError,
} from "../redux/actions";

function* signUp({ payload }) {
  try {
    yield call(axios.post, "http://localhost:5000/users", {
      ...payload,
    });
    yield put(signUpSuccess());
  } catch (error) {
    yield put(signUpError(error.response.data));
  }
}

function* login({ payload }) {
  try {
    const { data } = yield call(
      axios.post,
      "http://localhost:5000/users/login",
      {
        ...payload,
      }
    );
    localStorage.setItem('token', data.token);
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginError(error.response.data));
  }
}

export default function* () {
  yield takeLatest(SIGNUP, signUp);
  yield takeLatest(LOGIN, login);
}
