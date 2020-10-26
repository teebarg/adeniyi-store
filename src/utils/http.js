import axios from "axios";

const http = axios.create({
  baseURL: process.env.WP_API,
});

// Alter defaults after http has been created
http.defaults.headers.post['Content-Type'] = 'application/json';
http.defaults.withCredentials = true;

export default http;
