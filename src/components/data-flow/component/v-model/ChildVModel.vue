<script setup>
defineProps({
  label: String,
  modelValue: Boolean,
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div>
    {{ label }}
    <input
      type="checkbox"
      :checked="modelValue"
      @change="emit('update:modelValue', !modelValue)"
    />
  </div>
</template>
