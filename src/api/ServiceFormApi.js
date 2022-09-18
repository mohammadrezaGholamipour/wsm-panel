import HttpClient from './HttpClient';

export default {
  Form: (WebService) => HttpClient.post(`servicebus/serviceready`, WebService),

};
