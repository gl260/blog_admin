import { axios } from "axios";
import { BASE_URL, TIME_OUT } from "./config";

class GlRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({ baseURL, timeout });
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        // 几乎没有请求失败的情况
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      }
    );
  }
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  get(config) {
    return this.request({ ...config, method: "get" });
  }
  post(config) {
    return this.request({ ...config, method: "post" });
  }
  delete(config) {
    return this.instance({ ...config, method: "delete" });
  }
  patch(config) {
    return this.instance({ ...config, method: "patch" });
  }
}
