import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Base URL for the backend server
});

// Interceptor to attach the token to requests
API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

export default API;
