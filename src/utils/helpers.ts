export const buildRequest = (method: string, payload?: object) => {
  const token = import.meta.env.VITE_API_TOKEN;

  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: method,
    body: JSON.stringify(payload),
  };
};

export const buildUrl = (url: string, params?: any) => {
  const urlParams = params !== null ? '?' + new URLSearchParams(params) : '';

  return import.meta.env.VITE_API_BASEURL + url + urlParams;
};
