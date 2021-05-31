import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
    NEW_MEAL,
    newMealSuccess,
    newMealError,
    getMealsSuccess,
    GET_MEALS,
    getMealsError,
    updateMealSuccess,
    updateMealError,
    UPDATE_MEAL,
    DELETE_MEAL,
    deleteMealError,
    deleteMealSuccess,
} from "../redux/actions";

const URL = process.env.REACT_APP_API_BASE_URL;

function* createNewMeal({ payload }) {
  try {
    yield call(axios.post, `${URL}/meals`, {
        name: payload.name,
        calories: payload.calories,
        scheduleTime: payload.date,
    }, {
        headers: {
            Authorization: window.localStorage.getItem('token'),
        }
    });
    yield put(newMealSuccess());
  } catch (error) {
    yield put(newMealError(error.response.data));
  }
}

function *getMeals({ payload}) {
    try {
        const { data } = yield call(axios.get, `${URL}/meals`, {
            params: {
                date: payload.date,
            },
            headers: {
               Authorization: localStorage.getItem('token'),
            }
        });
        yield put(getMealsSuccess(data));
    } catch (error) {
        yield put(getMealsError(error.response.data));
    }
}

function *updateMeals({ payload }) {
    try {
        yield call(axios.patch, `${URL}/meals/${payload.id}`, {
            name: payload.name,
            calories: payload.calories,
            scheduleTime: payload.date,
        }, {
            headers: {
                Authorization: localStorage.getItem('token'),
            }
        });
        yield put(updateMealSuccess());
    } catch (error) {
        yield put(updateMealError(error.response.data));
    }
}

function *deleteMeal({ payload }) {
    try {
        yield call(axios.delete, `${URL}/meals/${payload.id}`, {
            headers: {
                Authorization: localStorage.getItem('token'),
            }
        });
        yield put(deleteMealSuccess());
    } catch (error) {
        yield put(deleteMealError(error.response.data));
    }
}


export default function* () {
  yield takeLatest(NEW_MEAL, createNewMeal);
  yield takeLatest(GET_MEALS, getMeals);
  yield takeLatest(UPDATE_MEAL, updateMeals);
  yield takeLatest(DELETE_MEAL, deleteMeal);
}
