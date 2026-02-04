import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_URI;
  
const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;