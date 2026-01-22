import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { signin as signinApi } from '@/api/authApi';

export const useAuthStore = defineStore('auth', () => {
  // state
  const token = ref(localStorage.getItem('token'));
  const username = ref(localStorage.getItem('username'));

  // getters
  const isAuthenticated = computed(() => !!token.value);

  // actions
  const signin = async (credentials) => {
    const response = await signinApi(credentials);

    if (response.data.data.accessToken) {
      token.value = response.data.data.accessToken;
      username.value = response.data.data.username;

      // persistence
      localStorage.setItem('token', token.value);
      localStorage.setItem('username', username.value);
      return
    }

    throw new Error('Invalid credentials');

  };

  const setToken = (newToken) => {
    token.value = newToken;
    localStorage.setItem('token', newToken);
  };

  const signout = () => {
    token.value = null;
    username.value = null;

    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  return {
    token,
    username,
    isAuthenticated,
    signin,
    setToken,
    signout,
  };
});
