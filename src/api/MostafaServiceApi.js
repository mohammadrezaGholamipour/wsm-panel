import HttpClient from "../config/HttpClient";

export default {
  MostafaService: () => HttpClient.get("/todos/1"),
};
