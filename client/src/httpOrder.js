import axios from "axios";
import { BEARER } from "./constant";
import { getToken } from "./tokenHelper";

const BASE_URL = process.env.REACT_APP_API_URL;

const USER_TOKEN = JSON.parse(getToken());
// console.log(BEARER + " " + USER_TOKEN);

const httpOrder = axios.create({
  baseURL: BASE_URL,

  headers: {
    Authorization: BEARER + " " + USER_TOKEN,
    "Content-Type": "application/json",
  },
});

export default httpOrder;
