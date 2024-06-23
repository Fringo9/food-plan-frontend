// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000'
});

export const login = async (username) => {
  const response = await api.post('/users/login', { username });
  return response.data;
};

export const getWeeklyPlan = async (username) => {
  const response = await api.get(`/users/${username}/plan`);
  console.log(response);
  return response.data;
};
