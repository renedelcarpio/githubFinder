import axiosInstance from './axiosInstance';

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axiosInstance.get(url).then(responseBody),
};

const User = {
  getUser: (user) => requests.get(`/search/users?q=${user}`),
};

const Repo = {
  getRepo: (repo) => requests.get(`/search/repositories?q=${repo}`),
};

export { User, Repo };
