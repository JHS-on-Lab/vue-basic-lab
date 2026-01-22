<script setup>
import { getUsers } from '@/services/userService';

const handleGetUsers = async () => {
  try {
    const payload = {
      page: 0,
      size: 10,
    }

    const response = await getUsers(payload)

    console.log('GetUsers response:', response);
  } catch (error) {
    console.log('GetUsers failed:', error);
  }
}
</script>

<template>
  <div>
    <h2>Protected Page</h2>
    <p>이 페이지는 로그인한 사용자만 접근할 수 있습니다.</p>
  </div>
  <button @click="handleGetUsers">Call getUsers API</button>
</template>
