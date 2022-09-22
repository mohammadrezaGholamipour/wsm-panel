import HttpClient from './HttpClient';
export default {
  khaharan: (webService) =>
    HttpClient.post('servicebus/servicerun', webService),
};
