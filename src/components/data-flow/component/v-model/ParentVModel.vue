<script setup>
import { ref } from 'vue';
import ChildVModel from './ChildVModel.vue';

const items = ref([
  { label: 'Child A', checked: false },
  { label: 'Child B', checked: false },
  { label: 'Child C', checked: false },
]);
</script>

<template>
  <section>
    <h3>V-Model 방식</h3>

    <ChildVModel v-for="(item, index) in items" :key="index" :label="item.label" v-model="item.checked" />

    <p>Checked: {{items.filter(i => i.checked).length}}</p>
  </section>
</template>
