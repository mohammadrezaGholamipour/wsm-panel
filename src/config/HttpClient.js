import axios from "axios";
const HttpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 20000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
export default HttpClient;