<script setup>
import { ref } from 'vue';
import ChildVModelCustom from './CustomChildVModel.vue';

const isChecked = ref(false);
</script>

<template>

  <section>
    <h3>Custom V-Model 방식</h3>

    <div> {{ isChecked }} </div>
    <ChildVModelCustom v-model:checked="isChecked" />
  </section>
</template>
