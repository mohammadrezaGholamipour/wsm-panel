import HttpClient from "../config/HttpClient";

export default {
  Khorasan: (WebService) => HttpClient.get("servicebus/serviceready", WebService),
};
