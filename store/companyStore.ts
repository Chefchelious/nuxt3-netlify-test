import type { ICompanyApi } from '~/types';
import { getCompanyInfo } from '~/services/CompanyService';

interface IProductState {
  companyInfo: ICompanyApi | null;
}

export const useCompanyStore = defineStore('use-company-store', {
  state: (): IProductState => ({
    companyInfo: null,
  }),

  actions: {
    async get() {
      const response = await getCompanyInfo();

      this.companyInfo = response.data;
    },
  },
});
