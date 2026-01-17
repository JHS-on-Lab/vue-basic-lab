<script setup>
import { ref } from 'vue';
import ChildEmit from './ChildEmit.vue';

const items = ref(['Child A', 'Child B', 'Child C']);
const selected = ref(null);

const onSelect = (index) => {
  selected.value = items.value[index];
};
</script>

<template>
  <section>
    <h3>Emit 방식</h3>
    <p v-if="selected">Selected: {{ selected }}</p>

    <ChildEmit v-for="(item, index) in items" :key="index" :label="item" :index="index" @select="onSelect" />
  </section>
</template>
