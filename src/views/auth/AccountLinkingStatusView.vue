<script setup>
import { ref, computed, onMounted } from 'vue';
import { getMyInfo, getSocialLinkUrl } from '@/services/userService';

const PROVIDERS = {
  GOOGLE: {
    name: 'Google',
    key: 'google',
  },
  KAKAO: {
    name: 'Kakao',
    key: 'KAKAO',
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

const handleConnectSocial = async (providerKey) => {
  try {
    const url = await getSocialLinkUrl(providerKey);
    window.location.href = url;
  } catch (error) {
    console.error('Failed to get social link url:', error);
  }
};
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

          <button v-else class="provider-connect" @click="handleConnectSocial(provider.key)">
            Connect
          </button>
        </div>
      </div>
    </section>
  </div>
</template>