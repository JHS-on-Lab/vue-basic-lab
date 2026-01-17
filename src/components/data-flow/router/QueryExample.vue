<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const goWithQuery = () => {
  router.push({
    name: 'router-data-flow',
    query: { type: 'basic', page: 1 },
  });
};
</script>

<template>
  <section>
    <h3>Query Example</h3>

    <button @click="goWithQuery">
      Go with Query
    </button>

    <p v-if="route.query.type">
      type: {{ route.query.type }},
      page: {{ route.query.page }}
    </p>
  </section>
</template>
