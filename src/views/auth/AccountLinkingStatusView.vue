<script setup>
import { ref, computed, onMounted } from 'vue';
import { getMyInfo } from '@/services/userService';

const PROVIDERS = {
  GOOGLE: {
    name: 'Google',
    key: 'GOOGLE',
    authUrl: 'http://localhost:8080/oauth2/authorization/google',
  },
};

const myInfo = ref(null);

onMounted(async () => {
  await handleGetMyInfo();
})

// LOCAL을 제외한 연결된 소셜 로그인 제공자 목록
const connectedSocialProviders = computed(() => myInfo.value?.connectedProviders.filter((provider) => provider !== 'LOCAL') ?? []);

const isConnected = (providerKey) => {
  return connectedSocialProviders.value.includes(providerKey)
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
    <h2>Account Linking Status</h2>

    <section>
      <h3>Connected Social Providers</h3>

      <div class="provider-list">
        <div v-for="provider in Object.values(PROVIDERS)" :key="provider.key" class="provider-item">
          <span class="provider-name" :class="{ connected: isConnected(provider.key) }">
            {{ provider.name }}
          </span>

          <span v-if="isConnected(provider.key)" class="provider-status connected">
            ✔ Connected
          </span>

          <a v-else :href="provider.authUrl" class="provider-connect">
            Connect
          </a>
        </div>
      </div>
    </section>
  </div>
</template>