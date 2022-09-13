import HttpClient from "../config/HttpClient";

export default {
  KhaharanService: () => HttpClient.get("/todos/1"),
};
