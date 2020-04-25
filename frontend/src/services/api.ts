import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhosto:3333',
})

export default api;
