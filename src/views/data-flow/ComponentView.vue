<script setup>
import ParentEmit from '@/components/data-flow/component/emit/ParentEmit.vue';
import ParentVModel from '@/components/data-flow/component/v-model/ParentVModel.vue';
import CustomParentVModel from '@/components/data-flow/component/v-model/custom/CustomParentVModel.vue';
</script>

<template>
  <div>
    <h2>Component Data Flow</h2>

    <ParentEmit />
    <hr />
    <ParentVModel />
    <hr />
    <CustomParentVModel />
  </div>
</template>
