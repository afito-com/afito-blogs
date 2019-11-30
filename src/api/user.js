import Cookies from 'js-cookie';
import axios from 'axios';
import * as keys from '../config.js';

export const getUser = (ctx = {}) => {
  let token = Cookies.get('token');
  if (token) {
    return axios.get(`${keys.base_url}user`, { headers: { Authorization: `JWT ${token}` } });
  } else {
    return null;
  }
};
