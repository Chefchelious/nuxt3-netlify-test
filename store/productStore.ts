import type { IProductApi } from '~/types';
import { getProducts } from '~/services/ProductService';

interface IProductState {
  products: IProductApi[];
}

export const useProductStore = defineStore('use-product-store', {
  state: (): IProductState => ({
    products: [],
  }),

  actions: {
    async get() {
      const response = await getProducts();

      this.products = response.data;
    },
  },
});
