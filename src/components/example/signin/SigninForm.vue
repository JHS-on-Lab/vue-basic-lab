<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();

const username = ref('');
const password = ref('');

const errorMessage = ref('');

const handleSignin = async () => {
  try {

    await authStore.signin({
      username: username.value,
      password: password.value,
    });

  } catch (error) {
    errorMessage.value = 'Signin failed';
  }
};

const handleSignout = () => {
  authStore.signout();
};
</script>

<template>
  <div>
    <h2>Sign In</h2>

    <div v-if="!authStore.isAuthenticated">
      <section>
        <input v-model="username" placeholder="Username" />

        <br />

        <input v-model="password" type="password" placeholder="Password" />
      </section>

      <br />

      <button @click="handleSignin">Sign In</button>

      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>

    <!-- 로그인 상태 -->
    <div v-else>
      <p> Welcome, <strong>{{ authStore.username }}</strong> </p>

      <button @click="handleSignout">Sign Out</button>
    </div>
  </div>
</template>
