import fetchOptions from '@/shared/lib/FetchOptions';

export const findEmail = async (data: object) => {
  const respones = await fetch(
    '/api/user/find-email',
    fetchOptions({ method: 'POST', body: data }),
  );
  return respones.json();
};
