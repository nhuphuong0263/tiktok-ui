import request from '~/utils/httpsRequest';

export const search = async (q, type = 'less') => {
  try {
    const res = await request.get('users/search', {
      params: {
        q,
        type,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
