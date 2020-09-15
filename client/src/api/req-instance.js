import axios from 'axios';
import { storageRemove } from '../utils/local-storage';
import { CONST } from '../constants';

const axiosinstance = axios.create({
  baseURL: 'http://localhost:4000/api/',
  withCredentials: true,
});

axiosinstance.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    if (error.response.status === 401) {
      storageRemove(CONST.STORAGE_KEY);
      document.location.href = '/';
    }
    return Promise.reject(error.response.data.errors);
  }
);

export { axiosinstance };
