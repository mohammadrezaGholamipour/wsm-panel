import HttpClient from './HttpClient';

export default {
  Tabel: (ServiceId, ServiceMethodId) =>
    HttpClient.get(
      `servicebus/serviceready?type=brief&serviceid=${ServiceId}&state=${ServiceMethodId}`
    ),
};
