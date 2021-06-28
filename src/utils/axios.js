import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://oq32i.sse.codesandbox.io"
});

axiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
