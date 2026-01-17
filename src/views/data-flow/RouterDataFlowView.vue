<script setup>
import QueryExample from '@/components/data-flow/router/QueryExample.vue';
import ParamsExample from '@/components/data-flow/router/ParamsExample.vue';
</script>

<template>
  <div>
    <h2>Router Data Flow</h2>

    <p>
      이 페이지는 <strong>Vue Router를 통한 데이터 전달 방식</strong>을
      비교하기 위한 예제입니다.
    </p>

    <QueryExample />
    <hr />

    <ParamsExample />
  </div>
</template>
