import axios from 'axios';
import * as keys from '../config.js';

export function createUser({ email, password, first, last, account_type }) {
  return axios.post(`${keys.base_url}signup`, {
    email: email,
    password: password,
    name: {
      first: first,
      last: last
    },
    account_type: account_type
  });
}
