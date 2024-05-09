import axios from "axios";
import {BASE_URL} from "../constants.js"

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: false ,

});

export default axiosInstance;
