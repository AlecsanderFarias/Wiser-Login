import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6033fe0a843b150017931fa2.mockapi.io',
});

export default api;
