// import { LoginFailure } from "./action";
import {
  ADD_TO_CART,
  CREATE_ORDER,
  GET_ALL_ORDERS,
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  REMOVE_ALL_CART,
  REMOVE_FORM_CART,
} from "./constant";

const Reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    // AUTH CONFIG
    case LOGIN_START:
      return {
        ...state,
        user: null,
        isLoading: true,
        error: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: false,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isLoading: false,
        error: true,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        cart: [],
        isLoading: false,
        error: true,
      };

    // CART CONFIG
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVE_ALL_CART:
      return {
        ...state,
        cart: [],
      };

    case REMOVE_FORM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    // ORDER CONFIG
    case GET_ALL_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };

    // ORDER CONFIG
    case CREATE_ORDER:
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return {
        state,
      };
  }
};

export default Reducer;
