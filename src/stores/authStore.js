import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
// import apiClient from '@/api/axios';

export const useAuthStore = defineStore('auth', () => {
  // state
  const token = ref(localStorage.getItem('token'));
  const username = ref(localStorage.getItem('username'));

  // getters
  const isAuthenticated = computed(() => !!token.value);

  // actions
  const login = async (credentials) => {
    // const response = await apiClient.post('/login', credentials);
    // 로그인 API 응답 가정
    if (credentials.username === 'tester' && credentials.password === '1234') {
      const response = {
        data: {
          token: 'jwt-token-from-server',
          username: 'testuser'
        }
      };

      token.value = response.data.token;
      username.value = response.data.username;

      // persistence
      localStorage.setItem('token', token.value);
      localStorage.setItem('username', username.value);
      return
    }
    throw new Error('Invalid credentials');

  };

  const logout = () => {
    token.value = null;
    username.value = null;

    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  return {
    token,
    username,
    isAuthenticated,
    login,
    logout,
  };
});
