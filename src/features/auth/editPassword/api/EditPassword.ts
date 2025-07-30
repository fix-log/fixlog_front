import fetchOptions from "@/shared/lib/FetchOptions";

export const editPassword = async (data: object) => {
  const respones = await fetch(
    '/api/user/reset-password',
    fetchOptions({ method: 'POST', body: data }),
  );
  return respones.json();
};
