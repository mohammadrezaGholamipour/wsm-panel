import axios from "axios";
import { useRouter } from "vue-router";
import { notify } from "@kyvg/vue3-notification";
import AuthService from "../api/auth.js";
const Router = useRouter()
const HttpClient = axios.create({
  baseURL: '/api/',
  timeout: 20000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
HttpClient.interceptors.request.use(
  (config) => {
    const Token = AuthService.getToken();
    if (Token) {
      config.headers["authorization"] = `Bearer ${tokenVal}`;
    }
    return config;
  },
  (error) => {
    console.log(error.message);
  }
);
HttpClient.interceptors.response.use(
  (response) => {
    const { code, message } = response.data;
    return response.data || null;
  },
  async (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          break;
        case 401:
          if (!error.config.url.endsWith("/api/login")) {
            Router.replace('/api/login')
          }
          break;
        case 403:
          if (window.location.href.includes("/admin"))
            routerInstance.push("/admin/error/403");
          else routerInstance.push("/account/auth");
          break;
        case 404:
          notify({
            type: "error",
            title: `منبع درخواست شده یافت نشد`
          });
          break;
        case 500:
          notify({
            type: "error",
            title: `خطای غیر منتظره! لطفا با پشتیبانی تماس بگیرید.`
          });
          break;
        case 501:
          notify({
            type: "error",
            title: `بخش درخواست شده درحال پیاده سازی می‌باشد. لطفا بعدا مراجعه نمایید`
          });
          break;
      }
    } else {
    }
    return Promise.reject(error);
  }
);
export default HttpClient;