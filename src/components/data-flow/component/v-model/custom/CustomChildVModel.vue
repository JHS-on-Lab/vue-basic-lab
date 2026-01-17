<script setup>
defineProps({
  checked: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:checked']);
</script>

<template>
  <label>
    <input type="checkbox" :checked="checked" @change="emit('update:checked', !checked)" />
    Custom v-model
  </label>
</template>
