import HttpClient from "../config/HttpClient";

export default {
  TabelService: (ServiceMethodId, ServiceId) => HttpClient.get(`servicebus/serviceready?type=brief&serviceid=${ServiceId}&state=${ServiceMethodId}`),
};
