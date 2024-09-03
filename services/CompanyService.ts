import type { AxiosResponse } from 'axios';
import type { ICompanyApi } from '~/types';

export const getCompanyInfo = async (): Promise<AxiosResponse<ICompanyApi>> => {
  const { $api } = useNuxtApp();
  return $api.get<ICompanyApi>('/company-info');
};
