import HttpClient from "../config/HttpClient";

export default {
  FormService: (WebService) => HttpClient.post(`servicebus/serviceready`, WebService),
};
