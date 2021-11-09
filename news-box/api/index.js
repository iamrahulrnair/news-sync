import axios from 'axios';

const PROXY = 'https://sheltered-gorge-14621.herokuapp.com';

const _axios = axios.create({
  baseURL: `${PROXY}/https://api.currentsapi.services/v1/search`,
  headers: {
    'cache-control': 'no-cache',
  },
  params: {
    apiKey: 'BzyD4gGiSmaTiGW6zKeNDxFj7v28HnU5-tzQN34AVnWsqZ1X',
    keywords: 'cryptocurrency',
    language: 'en',
  },
});
export { _axios };
