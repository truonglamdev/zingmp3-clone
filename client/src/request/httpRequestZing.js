import axios from 'axios';
import { URL_API } from '~/constants';

const httpRequestZing = axios.create({
    baseURL: `${URL_API}/api/zing`,
});

export const get = async (path = '', option = {}) => {
    console.log(process.env.URL_API);
    const { data } = await httpRequestZing.get(path, option);
    return data;
};

export default httpRequestZing;
