import axios from 'axios';

// Define the base URL based on the environment
const baseURL = process.env.NODE_ENV === 'production' ? process.env.PURL : process.env.DURL;
console.log("baseURL",baseURL)
const api = axios.create({
  baseURL:'http://localhost:8000/api/',
});

export default api;
