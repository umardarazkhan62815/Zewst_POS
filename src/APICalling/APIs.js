import axios from 'axios';

const BASE_URL = 'https://api.example.com';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchUserData = async userId => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};

export const createPost = async postData => {
  const response = await api.post('/posts', postData);
  return response.data;
};
