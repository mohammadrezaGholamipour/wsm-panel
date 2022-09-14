import HttpClient from "../config/HttpClient";

export default {
  Form: (WebService) => HttpClient.post(`servicebus/serviceready`, WebService),
};
