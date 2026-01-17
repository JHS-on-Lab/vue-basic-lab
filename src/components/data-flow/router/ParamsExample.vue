<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const goWithParams = () => {
  router.push({
    name: 'router-data-flow',
    params: { id: 42 },
  });
};
</script>

<template>
  <section>
    <h3>Params Example</h3>

    <button @click="goWithParams">
      Go with Params
    </button>

    <p v-if="route.params.id">
      id: {{ route.params.id }}
    </p>
  </section>
</template>
