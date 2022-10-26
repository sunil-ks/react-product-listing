import { API_ROOT } from '../config';
import axiosInstance from "./index";

// all the APIs related to shopping will be listed in this api module
export const getProductsApi = () => {
    // API to fetch all the products
    const url = `${API_ROOT}/products.json`;
    return axiosInstance.get(url);
};
