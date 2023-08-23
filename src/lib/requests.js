import axios from 'axios';
import { urls } from './consts';
//========================================
export const getAllProducts = async () => {
  const {
    data: { data },
  } = await axios.get(urls.getAllUrl);
  return data;
};
