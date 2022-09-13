import HttpClient from "../config/HttpClient";

export default {
  TabelService: (ServiceId,ServiceMethodId) => HttpClient.get(`servicebus/serviceready?type=brief&serviceid=${ServiceId}&state=${ServiceMethodId}`),
};
