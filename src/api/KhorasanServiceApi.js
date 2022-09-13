import HttpClient from "../config/HttpClient";

export default {
  KhorasanService: () => HttpClient.get("/todos/1"),
};
