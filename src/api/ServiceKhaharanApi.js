import HttpClient from "../config/HttpClient";

export default {
  Khaharan: (WebService) => HttpClient.get("servicebus/serviceready", WebService),
};
