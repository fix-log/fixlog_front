interface fetchLoginProps {
  loginData: {
    email: string;
    password: string;
  };
}

export const loginAPI = async ({ loginData }: fetchLoginProps) => {
  const respones = await fetch('/api/user/login', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginData),
  });
  return respones.json();
};
