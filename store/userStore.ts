import type { IUserApi } from '~/types';
import { login, logout } from '~/services/AuthService';

interface IUserState {
  user: IUserApi | null;
}

export const useUserStore = defineStore('use-user-store', {
  state: (): IUserState => ({
    user: null,
  }),

  actions: {
    setUser(user: IUserApi) {
      this.user = user;
    },
    clearUserState() {
      this.user = null;
    },
    async login(payload: { username: string; password: string }) {
      const response = await login(payload);
      // localStorage.setItem('token', response.data.accessToken);
      // localStorage.setItem('user', JSON.stringify(response.data.user));
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      this.user = response.data.user;
    },
    async logout() {
      await logout();
      // localStorage.removeItem('token');
      // localStorage.removeItem('user');
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
      this.clearUserState();
    },
    getUserFromLS() {
      const user = localStorage.getItem('user');
      if (user) {
        this.user = JSON.parse(user);
      } else {
        this.user = null;
      }
    }
  },
});
