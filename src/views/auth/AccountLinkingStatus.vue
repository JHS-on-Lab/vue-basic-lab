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

    <div>
      <section>
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
      </section>
    </div>
  </div>
</template>
