import HttpClient from "../config/HttpClient";

export default {
  TabelService: () => HttpClient.get("/todos/1"),
};
