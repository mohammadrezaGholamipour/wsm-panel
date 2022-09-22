import HttpClient from './HttpClient';
export default {
  mostafa: (webService) =>
    HttpClient.post('servicebus/serviceready', webService),
};
