import $api from '~/http';
import type { AxiosResponse } from 'axios';
import type { IProductApi } from '~/types';

export const getProducts = async (): Promise<AxiosResponse<IProductApi[]>> => {
  return $api.get<IProductApi[]>('/products');
};
