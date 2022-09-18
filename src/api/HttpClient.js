import axios from "axios";
import AuthService from "../api/auth.js";
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
          if (!error.config.url.endsWith("/api/")) {

          }
          break;
        case 403:
          if (window.location.href.includes("/admin"))
            routerInstance.push("/admin/error/403");
          else routerInstance.push("/account/auth");
          break;
        case 404:
          ElMessageBox.alert(`منبع درخواست شده یافت نشد.`, "خطا", {
            confirmButtonText: "بسیار خب",
            center: true,
          });
          break;
        case 405:
          if (isDevelopment) console.log("Not implemented");
          break;
        case 500:
          ElMessageBox.alert(
            `خطای غیر منتظره! لطفا با پشتیبانی تماس بگیرید.`,
            "خطا",
            {
              confirmButtonText: "بسیار خب",
              center: true,
            }
          );
          break;
        case 501:
          ElMessageBox.alert(
            `بخش درخواست شده درحال پیاده سازی می‌باشد. لطفا بعدا مراجعه نمایید`,
            "خطا",
            {
              confirmButtonText: "بسیار خب",
              center: true,
            }
          );
          break;
        default:
          if (isDevelopment)
            console.log(`http client status : ${error.response.status}`);
      }
    } else {
    }
    return Promise.reject(error);
  }
);
export default HttpClient;