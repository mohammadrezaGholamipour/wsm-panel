import HttpClient from "../config/HttpClient";

export default {
  Tabel: (ServiceId,ServiceMethodId) => HttpClient.get(`servicebus/serviceready?type=brief&serviceid=${ServiceId}&state=${ServiceMethodId}`),
};
