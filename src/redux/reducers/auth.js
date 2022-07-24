// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Log} from '../../util';
import {AUTH_LOADING, AUTH_USER, SET_USER, USER_LOGOUT} from '../actions/types';
const initial_state = {
  isAuthenticated: false,
  user: {},
  auth_loading: true,
  token: null,
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        token: action.payload?.token,
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
        token: null,
      };
    case AUTH_LOADING:
      return {
        ...state,
        auth_loading: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
