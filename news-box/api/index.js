import axios from 'axios';

const _axios = axios.create({
  baseURL: 'https://newsapi.org/v2/everything',
  headers: {
    Authorization: 'c261daf1d00146a78ee54d69356260d9',
  },
  params: {
    q: 'crypto',
    language: 'en',
  },
});
export { _axios };
