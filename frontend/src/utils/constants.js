import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export const PROD = true;
export const SERVER_PROD =
  "https://digital-wallet-bank-1bcfd69b56e9.herokuapp.com";
export const SERVER_LOCAL = "http://127.0.0.1:8000";

export const client = axios.create({
  baseURL: PROD ? SERVER_PROD : SERVER_LOCAL,
});

const user = JSON.parse(localStorage.getItem("user"));

export const token = {
  headers: { Authorization: `Bearer ${user?.token}` },
};
