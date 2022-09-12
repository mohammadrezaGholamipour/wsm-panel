import HttpClient from "../config/HttpClient";

export default {
  WebService: (WebService) => HttpClient.post("/todos/1"),
};
