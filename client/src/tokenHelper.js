import { AUTH_TOKEN } from "./constant";

export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN);
};

export const setToken = (token) => {
  if (token) {
    return localStorage.setItem(AUTH_TOKEN, JSON.stringify(token));
  }
};

export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
};
