import { axiosinstance } from './req-instance';

function post(url, data) {
  return axiosinstance.post(url, data);
}

function get(url) {
  return axiosinstance.get(url);
}

export { get, post };
