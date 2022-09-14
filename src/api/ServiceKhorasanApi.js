import HttpClient from './HttpClient';

export default {
  Khorasan: (WebService) =>
    HttpClient.post('servicebus/serviceready', WebService),
};
