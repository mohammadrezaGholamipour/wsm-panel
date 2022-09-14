import HttpClient from "../config/HttpClient";

export default {
  Sms: (WebService) => HttpClient.get("/todos/1", WebService),
};
