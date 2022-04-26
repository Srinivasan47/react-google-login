/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-return-await */
import httpClient from './http-client';

const headers = {
  'Content-Type': 'application/json'
};

export const appAccessLevelPermission = async () => {
  const res = await httpClient(`/odata/AccessLevelPermissions`);
  return await res.data;
};
export const authenticate = async (item) => {
  const res = await httpClient.post(`/account/login`, item, headers);
  return await res.data;
};
