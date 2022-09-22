import HttpClient from './HttpClient';
export default {
  form: (webService) => HttpClient.post(`servicebus/servicerun`, webService),
};
