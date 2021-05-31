export const SIGNUP = "SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const NEW_MEAL = "NEW_MEAL";
export const NEW_MEAL_SUCCESS = "NEW_MEAL_SUCCESS";
export const NEW_MEAL_ERROR = "NEW_MEAL_ERROR";
export const GET_MEALS = 'GET_MEALS';
export const GET_MEALS_SUCCESS = 'GET_MEALS_SUCCESS';
export const GET_MEALS_ERROR = 'GET_MEALS_ERROR';
export const UPDATE_MEAL = 'UPDATE_MEAL';
export const UPDATE_MEAL_SUCCESS = 'UPDATE_MEAL_SUCCESS';
export const UPDATE_MEAL_ERROR = 'UPDATE_MEAL_ERROR';
export const DELETE_MEAL = 'DELETE_MEAL';
export const DELETE_MEAL_SUCCESS = 'DELETE_MEAL_SUCCESS';
export const DELETE_MEAL_ERROR = 'DELETE_MEAL_ERROR';

export const signUp = (userDetails) => ({ type: SIGNUP, payload: userDetails });

export const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
  message: "Registration Successful!",
});

export const signUpError = (message) => ({
  type: SIGNUP_ERROR,
  message,
});

export const login = (userCredentials) => ({
  type: LOGIN,
  payload: userCredentials,
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  ...data,
});

export const loginError = (message) => ({
  type: LOGIN_ERROR,
  message,
});

export const newMeal = (mealDetails) => ({
  type: NEW_MEAL,
  payload: mealDetails,
});

export const newMealSuccess = () => ({
  type: NEW_MEAL_SUCCESS,
  message: "New Meal Successfully Added!",
});

export const newMealError = (message) => ({
  type: NEW_MEAL_ERROR,
  message,
});

export const getMeals = (payload) => ({
    type: GET_MEALS,
    payload,
});

export const getMealsSuccess = (payload) => ({
    type: GET_MEALS_SUCCESS,
    payload,
});

export const getMealsError = (message) => ({
    type: GET_MEALS_ERROR,
    message,   
});

export const updateMeal = (payload) => ({
    type: UPDATE_MEAL,
    payload,
});

export const updateMealSuccess = () => ({
   type: UPDATE_MEAL_SUCCESS,
   message: 'Successfully updated Meal!',
});

export const updateMealError = (message) => ({
   type: UPDATE_MEAL_ERROR,
   message,
});

export const deleteMeal = (payload) => ({
    type: DELETE_MEAL,
    payload,
});

export const deleteMealSuccess = () => ({
    type: DELETE_MEAL_SUCCESS,
    message: 'Successfully deleted Meal',
});

export const deleteMealError = (message) => ({
   type: DELETE_MEAL_ERROR,
   message,
});


