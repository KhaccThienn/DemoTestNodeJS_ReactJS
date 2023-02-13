import axios from "axios";

const axiosInstance = axios.create();

export const get = async (url, config = {}) => {
    const res = await axiosInstance.get(url, config);
    return res.data;
};

export const post = async (url, data, config = {}) => {
    const res = await axiosInstance.post(url, data, config);
    return res.data;
};

export default axiosInstance;