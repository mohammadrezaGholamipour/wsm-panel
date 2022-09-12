import HttpClient from "../config/HttpClient";

export default {
  WebService: (WebService) => HttpClient.get("/todos/1"),
};
