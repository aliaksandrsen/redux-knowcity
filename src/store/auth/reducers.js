import { AUTH_CHANGE_EMAIL, AUTH_CHANGE_PASSWORD } from './actions';

const initialState = {
  email: '',
  password: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_CHANGE_EMAIL:
      return { ...state, email: action.payload };

    case AUTH_CHANGE_PASSWORD:
      return { ...state, password: action.payload };

    default:
      return state;
  }
};

export const emailSelector = (state) => state.auth.email;
export const passwordSelector = (state) => state.auth.password;
