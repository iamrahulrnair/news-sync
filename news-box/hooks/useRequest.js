import { _axios } from '../api';
const useRequest = () => {
  const doRequest = async () => {
    const { data } = await _axios.get();
    return { data };
  };

  return { doRequest };
};
export { useRequest };
