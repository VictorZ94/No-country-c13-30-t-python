import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

export const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const user = JSON.parse(localStorage.getItem("user"));
console.log("utils", user);
export const token = {
  headers: { Authorization: `Bearer ${user?.token}` }
};
