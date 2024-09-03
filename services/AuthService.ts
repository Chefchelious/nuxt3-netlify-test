import $api from '~/http';
import type { AxiosResponse } from 'axios';
import type { IAuthResponse } from '~/types';

export const login = async (payload: {
  username: string;
  password: string;
}): Promise<AxiosResponse<IAuthResponse>> => {
  return $api.post<IAuthResponse>('/user/login', payload);
};

export const logout = async (): Promise<void> => {
  return $api.post('/user/logout');
};
