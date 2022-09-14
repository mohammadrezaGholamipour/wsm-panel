import HttpClient from "../config/HttpClient";

export default {
  Mostafa: (WebService) => HttpClient.get("servicebus/serviceready", WebService),
};
