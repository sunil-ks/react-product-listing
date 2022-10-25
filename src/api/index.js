import axios from "axios";
import { API_ROOT } from "../config";

const axiosInstance = axios;

// Intercept requests and adds authorization header if the user is logged in
axiosInstance.interceptors.request.use(
  (config) => {
    if (config.url.includes(`${API_ROOT}`)) {
      // pass the API token here if API is authenticated
      // Since our API endpoint does not expect a token, I haven't done anything here as of now.
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error, "error");
    if (error.response.status === 401) {
      // Handle either refresh or logout.
      // Since our application does not have a auth activity, I haven't done anything here as of now.
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
