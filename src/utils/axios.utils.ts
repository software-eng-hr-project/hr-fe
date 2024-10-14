import axios from "axios";
import qs from "qs";

const URL = process.env.REACT_APP_API_URL;
const TIMEOUT = 30 * 1000; // ms = second * 1000

const http = axios.create({
  baseURL: URL,
  timeout: TIMEOUT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    "Cache-Control": "no-store",
    "Accept-Language": "en-US",
  },
  paramsSerializer: {
    serialize: (params) => {
      return qs.stringify(params, { arrayFormat: "repeat" });
    },
  },
});

http.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => Promise.reject(error),
);

export default http;
