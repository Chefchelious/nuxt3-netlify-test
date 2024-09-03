import $api from '~/http';
import type { AxiosResponse } from 'axios';
import type { IAgentApi } from '~/types';

export const getAgents = async (): Promise<AxiosResponse<IAgentApi[]>> => {
  return $api.get<IAgentApi[]>('/agents');
};
