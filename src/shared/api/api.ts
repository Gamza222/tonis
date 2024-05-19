import axios from 'axios';
// import { LOCALSTORAGE_KEY } from 'shared/const/localStorage';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: '',
    //localStorage.getItem(LOCALSTORAGE_KEY) ||
  },
});
