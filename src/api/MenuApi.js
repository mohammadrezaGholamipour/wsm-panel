import HttpClient from "../config/HttpClient";

export default {
  ListMenu: () =>
    HttpClient.get(
      "servicerun?state=1022&limit=20&offset=1&sort=&filter=&type=full"
    ),
};
