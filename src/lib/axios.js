import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
});

apiClient.interceptors.request.use((config) => {
  const authStore = useAuthStore();

  // 토큰을 헤더에 포함
  if (authStore.token) {
    config.headers.Authorization = `Bearer ${authStore.token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const authStore = useAuthStore();

    if (error.response) {
      const status = error.response.status;

      // 인증 실패
      if (status === 401) {
        authStore.logout();

        alert('로그인이 만료되었습니다. 다시 로그인해주세요.');

        router.push({ name: 'login' });
      }

      // 권한 없음
      if (status === 403) {
        alert('접근 권한이 없습니다.');
      }
    }

    // 모든 에러는 호출한 쪽에서도 처리 가능하도록 throw
    return Promise.reject(error);
  }
);

export default apiClient;
