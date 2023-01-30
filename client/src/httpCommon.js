import axios from "axios";
import { BEARER } from "./constant";

const BASE_URL = process.env.REACT_APP_API_URL;

const httpCommon = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: BEARER + " " + process.env.REACT_APP_API_TOKEN,
    // 'Accept': 'application/json',
    // "CORS": "AllowAll"
    // 'Access-Control-Allow-Origin' : '*',
    // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    // "Access-Control-Allow-Credentials": true
  },
});

export default httpCommon;
