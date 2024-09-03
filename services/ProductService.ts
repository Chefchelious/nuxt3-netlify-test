import type { AxiosResponse } from 'axios';
import type { IProductApi } from '~/types';

export const getProducts = async (): Promise<AxiosResponse<IProductApi[]>> => {
  const { $api } = useNuxtApp();
  return $api.get<IProductApi[]>('/products');
};
