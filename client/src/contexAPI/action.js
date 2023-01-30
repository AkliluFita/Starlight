import {
  ADD_TO_CART,
  CREATE_ORDER,
  GET_ALL_ORDERS,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  REMOVE_ALL_CART,
  REMOVE_FORM_CART,
} from "./constant";

// auth action
export const LoginStart = () => ({
  type: LOGIN_START,
});

export const LoginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const LogOut = () => ({
  type: LOGOUT,
});

// cart action
export const AddCart = (data) => ({
  type: ADD_TO_CART,
  payload: data,
});

export const RemoveCart = (id) => ({
  type: REMOVE_FORM_CART,
  payload: id,
});

export const RemoveAllCarts = () => ({
  type: REMOVE_ALL_CART,
});

//order action
export const getAllOrder = (data) => ({
  type: GET_ALL_ORDERS,
  payload: data,
});

export const createOrder = (data) => ({
  type: CREATE_ORDER,
  payload: data,
});
