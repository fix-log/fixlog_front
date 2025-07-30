import fetchOptions from "@/shared/lib/FetchOptions";

export const findPassword = async (data: object) => {
  const respones = await fetch(
    '/api/user/find-password',
    fetchOptions({ method: 'POST', body: data }),
  );
  return respones.json();
};
