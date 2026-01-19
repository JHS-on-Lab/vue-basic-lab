<script setup>
import SignupForm from '@/components/example/signin/SignupForm.vue';
import SigninForm from '@/components/example/signin/SigninForm.vue';
</script>

<template>
  <div>

    <div>
      <SignupForm />
    </div>

    <hr />

    <div>
      <SigninForm />
    </div>

    <hr />

    <div>
      <RouterLink :to="{ name: 'protected' }">Go to Protected Page</RouterLink>
    </div>

  </div>
</template>
