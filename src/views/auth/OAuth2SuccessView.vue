<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {
  // hash에서 accessToken 추출
  const hash = window.location.hash;

  if (!hash.startsWith('#accessToken=')) {
    // 잘못된 접근
    router.replace({ name: 'signin' });
    return;
  }

  const accessToken = hash.replace('#accessToken=', '');

  // authStore에 토큰 저장
  authStore.setToken(accessToken);

  // URL 정리 (hash 제거)
  window.history.replaceState(
    null,
    '',
    window.location.pathname
  );

  // 페이지로 이동
  router.replace({ name: 'signin' });
});
</script>

<template>
  <p>Signing in with Google...</p>
</template>
