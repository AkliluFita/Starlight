import { createContext, useEffect, useReducer } from "react";
import Reducer from "./reducer";

//get the persisted cart from local storage
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));

// initial state
const INITIAL_STATE = {
  user: userFromLocalStorage || null,
  isLoading: false,
  error: false,
  cart: cartFromLocalStorage || [],
  products: [],
  orders: [],
};

// prepare the data layer
export const Context = createContext(INITIAL_STATE);

// wrap out app and provide the data layer
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  // to create the cart state in local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  // to create user state in local storage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        error: state.error,
        cart: state.cart,
        products: state.products,
        orders: state.orders,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
