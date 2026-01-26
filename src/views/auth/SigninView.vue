<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { getMyInfo } from '@/services/userService';

const PROVIDERS = {
  GOOGLE: {
    name: 'Google',
    key: 'GOOGLE',
    authUrl: 'http://localhost:8080/oauth2/authorization/google',
  },
};

const authStore = useAuthStore();

const username = ref('');
const password = ref('');
const errorMessage = ref('');

const myInfo = ref(null);

// LOCAL을 제외한 연결된 소셜 로그인 제공자 목록
const connectedSocialProviders = computed(() => myInfo.value?.connectedProviders.filter((provider) => provider !== 'LOCAL') ?? []);

const isConnected = (providerKey) => {
  console.log('providerKey:', providerKey);
  console.log('connectedSocialProviders:', connectedSocialProviders.value);
  return connectedSocialProviders.value.includes(providerKey)
};

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
  myInfo.value = null;
};

const handleGetMyInfo = async () => {
  try {
    myInfo.value = await getMyInfo();
  } catch (error) {
    console.error('Failed to fetch my info:', error);
  }
}
</script>

<template>
  <div>
    <h2>Sign In</h2>

    <!-- 로그인 안 된 상태 -->
    <div v-if="!authStore.isAuthenticated">
      <section>
        <input v-model="username" placeholder="Username" />
        <br />
        <input v-model="password" type="password" placeholder="Password" />
      </section>

      <br />

      <button @click="handleSignin">Sign In</button>

      <br />

      <a :href="PROVIDERS.GOOGLE.authUrl" style="margin-left: 16px;"> Sign In with Google </a>

      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>

    <!-- 로그인 상태 -->
    <div v-else>
      <p>
        Welcome, <strong>{{ authStore.username }}</strong>
      </p>

      <button @click="handleGetMyInfo">
        Show My Email Connection Status
      </button>

      <h3>Connected Social Providers</h3>

      <ul>
        <li v-for="provider in Object.values(PROVIDERS)" :key="provider.key">
          <span :style="{
            color: isConnected(provider.key) ? 'green' : '#999',
            fontWeight: isConnected(provider.key) ? 'bold' : 'normal',
          }">
            {{ provider.name }}
          </span>

          <template v-if="isConnected(provider.key)">
            ✔ Connected
          </template>

          <template v-else>
            <a :href="provider.authUrl" style="margin-left: 8px;">
              Connect
            </a>
          </template>
        </li>
      </ul>

      <br />

      <button @click="handleSignout">Sign Out</button>
    </div>
  </div>
</template>
