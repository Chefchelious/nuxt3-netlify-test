import type { IAgentApi } from '~/types';
import { getAgents } from '~/services/AgentService';

interface IProductState {
  agents: IAgentApi[];
}

export const useAgentStore = defineStore('use-agent-store', {
  state: (): IProductState => ({
    agents: [],
  }),

  actions: {
    async get() {
      const response = await getAgents();

      this.agents = response.data;
    },
  },
});
