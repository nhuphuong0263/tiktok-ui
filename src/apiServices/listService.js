import request, { get } from '~/utils/httpsRequest';

export const listPost = async () => {
  try {
    const res = await get('posts', null);
    return res;
  } catch (error) {
    console.log('Error:', error);
  }
};
