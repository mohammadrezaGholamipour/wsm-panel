import HttpClient from './HttpClient';

export default {
  Sms: (WebService) => HttpClient.post('/todos/1', WebService),
};
