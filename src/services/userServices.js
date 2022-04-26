/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */
import httpClient from './http-client';

export const getAllUsers = async () => {
  const res = await httpClient.get(
    `https://jsonplaceholder.typicode.com/users`
  );
  return await res.data;
};
