import HttpClient from "../config/HttpClient";

export default {
  WebService: () => HttpClient.post("/todos/1"),
};
