export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const signUp = (userDetails) => ({ type: SIGNUP, payload: userDetails });

export const signUpSuccess = () => ({
    type: SIGNUP_SUCCESS,
    message: 'Registration Successful!',
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

