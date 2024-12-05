export const API_BASEURL = import.meta.env.PUBLIC_API_BASEURL;

export const buildRequest = (method: string, payload?: object) => {
  const token = import.meta.env.PUBLIC_API_TOKEN;

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

  return API_BASEURL + url + urlParams;
};
