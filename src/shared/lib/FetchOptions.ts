type method = 'GET' | 'POST' | 'PATCH' | 'DELETE';
interface fetchOptionsType {
  method: method;
  token?: string;
  body?: object;
}

export default function fetchOptions({ method, token, body }: fetchOptionsType): RequestInit {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + (token || ''),
    },
    body: body && JSON.stringify(body),
  };
}

// fetch 옵션을 묶은건데 잘 될지 모르겠습니다요
// 잘 됐음 좋겠다