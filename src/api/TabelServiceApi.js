import HttpClient from "../config/HttpClient";

export default {
  TabelService: (ServiceMethodId, ServiceId) => HttpClient.get("/todos/1"),
};
