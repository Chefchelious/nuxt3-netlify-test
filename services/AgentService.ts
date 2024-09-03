import type { AxiosResponse } from 'axios';
import type { IAgentApi } from '~/types';

export const getAgents = async (): Promise<AxiosResponse<IAgentApi[]>> => {
  const { $api } = useNuxtApp();

  return $api.get<IAgentApi[]>('/agents');
};
