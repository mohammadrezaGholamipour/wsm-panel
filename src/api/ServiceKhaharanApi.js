import HttpClient from './HttpClient';

export default {
  Khaharan: (WebService) =>
    HttpClient.post('servicebus/serviceready', WebService),
};
