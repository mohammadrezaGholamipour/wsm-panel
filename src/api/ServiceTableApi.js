import { Pagination } from '../config/config';
import HttpClient from './HttpClient';
export default {
  tabel: (serviceId, serviceMethodId) =>
    HttpClient.get(
      `servicebus/serviceready?type=brief&serviceid=${serviceId}&state=${serviceMethodId}`
    ),
  getList: (serviceMethodId, offset) =>
    HttpClient.get(
      `servicebus/servicerun?type=full&offset=${offset}&limit=${Pagination.PageSize}&state=${serviceMethodId}`
    ),
};
