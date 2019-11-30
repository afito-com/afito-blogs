import axios from 'axios';
import Cookies from 'js-cookie';
import * as keys from '../config.js';

export function signIn({ email, password }) {
  return axios.post(`${keys.base_url}signin`, {
    email: email,
    password: password
  });
}

export function saveToken(token) {
  try {
    Cookies.set('token', token, { expires: 30 });
    localStorage.setItem('token', token);
  } catch (err) {
    console.error('Error saving token: ', { err });
  }
}

export function signOut(ctx = {}) {
  Cookies.remove('token');
  window.location.reload();
}
