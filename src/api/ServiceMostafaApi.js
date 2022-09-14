import HttpClient from './HttpClient';

export default {
  Mostafa: (WebService) =>
    HttpClient.post('servicebus/serviceready', WebService),
};
