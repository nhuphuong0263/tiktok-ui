import axios from 'axios';

const httpsRequest = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const get = async (path, options) => {
  try {
    const response = await httpsRequest.get(path, options);
    return response.data;
  } catch (error) {
    console.log('error ne', error);
    throw error;
  }
};

export default httpsRequest;
