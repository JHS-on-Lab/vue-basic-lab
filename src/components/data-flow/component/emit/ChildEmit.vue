<script setup>
const props = defineProps({
  label: String,
  index: Number,
});

const emit = defineEmits(['select']);

const select = () => {
  emit('select', props.index);
};
</script>

<template>
  <div>
    {{ label }}
    <button @click="select">Select</button>
  </div>
  <br />
</template>
