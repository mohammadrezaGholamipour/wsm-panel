import HttpClient from './HttpClient';
export default {
  sms: (webService) => HttpClient.post('/todos/1', webService),
};
