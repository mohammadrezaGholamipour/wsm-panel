import HttpClient from "../config/HttpClient";

export default {
  SmsService: () => HttpClient.get("/todos/1"),
};
