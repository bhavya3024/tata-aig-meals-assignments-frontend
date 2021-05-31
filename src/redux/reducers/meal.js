import { createAction, createReducer } from "@reduxjs/toolkit";
import {
    NEW_MEAL,
    NEW_MEAL_SUCCESS,
    NEW_MEAL_ERROR,
    GET_MEALS,
    GET_MEALS_SUCCESS,
    GET_MEALS_ERROR,
    UPDATE_MEAL,
    UPDATE_MEAL_SUCCESS,
    UPDATE_MEAL_ERROR,
    DELETE_MEAL,
    DELETE_MEAL_SUCCESS,
    DELETE_MEAL_ERROR,
} from "../actions";

const updateMeal = createAction(UPDATE_MEAL);
const updateMealSuccess = createAction(UPDATE_MEAL_SUCCESS);
const updateMealError = createAction(UPDATE_MEAL_ERROR);

const newMeal = createAction(NEW_MEAL);
const newMealSuccess = createAction(NEW_MEAL_SUCCESS);
const newMealError = createAction(NEW_MEAL_ERROR);

const getMeals = createAction(GET_MEALS);
const getMealsSuccess  = createAction(GET_MEALS_SUCCESS);
const getMealsError = createAction(GET_MEALS_ERROR);

const deleteMeal = createAction(DELETE_MEAL);
const deleteMealSuccess = createAction(DELETE_MEAL_SUCCESS);
const deleteMealError = createAction(DELETE_MEAL_ERROR);


const mealReducer = createReducer({}, (builder) => {
  builder.addCase(newMeal, (state, action) => {
    state = {};
    Object.assign(state, { ...action.payload });
    return state;
  });
  builder.addCase(newMealSuccess, (state, action) => {
    state = {};
    Object.assign(state, { ...action });
    return state;
  });
  builder.addCase(newMealError, (state, action) => {
    state = {};
    Object.assign(state, { ...action });
    return state;
  });
  builder.addCase(getMeals, (state, action) => {
    state = {};
    Object.assign(state, { ...action.payload });
    return state;
  });
  builder.addCase(getMealsSuccess, (state, action) => {
    state = {};
    Object.assign(state, { ...action });
    return state;
  });
  builder.addCase(getMealsError, (state, action) => {
    state = {};
    Object.assign(state, { ...action });
    return state;
  });
  builder.addCase(updateMeal, (state, action) => {
    state = {};
    Object.assign(state, { ...action.payload });
    return state;
  });
  builder.addCase(updateMealSuccess, (state, action) => {
    state = {};
    Object.assign(state, { ...action });
    return state;
  });
  builder.addCase(updateMealError, (state, action) => {
    state = {};
    Object.assign(state, { ...action });
    return state;
  });
  builder.addCase(deleteMeal, (state, action) => {
      state = {};
      Object.assign(state, { ...action.payload });
      return state;
  });
  builder.addCase(deleteMealSuccess, (state, action) => {
    state = {};
    Object.assign(state, { ...action });
    return state;
  });
  builder.addCase(deleteMealError, (state, action) => {
    state = {};
    Object.assign(state, { ...action });
    return state;
  });
});

export default mealReducer;
