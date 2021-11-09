import axios from 'axios';

const _axios = axios.create({
  baseURL: 'http://api.mediastack.com/v1/news',
  params: {
    access_key: '21eb3b5f8b673500bd62fd7dd8144e9e',
    category: 'technology',
    languages: 'en',
    keywords: 'cryptocurrency',
  },
});
export { _axios };
