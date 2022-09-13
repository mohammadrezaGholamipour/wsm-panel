import HttpClient from "../config/HttpClient";

export default {
  WebServiceForm: (WebService) => HttpClient.post(`servicebus/serviceready`, WebService),
};
