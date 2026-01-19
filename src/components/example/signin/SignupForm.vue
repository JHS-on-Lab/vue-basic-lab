<script setup>
import { ref } from 'vue';
import { signup } from '@/services/userService';

const username = ref('')
const password = ref('')
const email = ref('')
const role = ref('ROLE_USER')

const errorMessage = ref('')
const successMessage = ref('')

const handleSignup = async () => {
  try {
    const payload = {
      username: username.value,
      password: password.value,
      email: email.value,
      role: role.value,
    }

    await signup(payload)

    successMessage.value = 'Signup successful!'
    errorMessage.value = ''
  } catch (error) {
    errorMessage.value = 'Signup failed'
    successMessage.value = ''
  }
}
</script>

<template>
  <div>
    <h2>Sign Up</h2>

    <section>
      <h3>Account Information</h3>

      <input v-model="username" placeholder="Username" />

      <br />

      <input v-model="password" type="password" placeholder="Password" />
    </section>

    <section>
      <h3>Contact Information</h3>

      <input v-model="email" type="email" placeholder="Email" />
    </section>

    <section>
      <h3>Role</h3>

      <select v-model="role">
        <option value="ROLE_USER">USER</option>
        <option value="ROLE_ADMIN">ADMIN</option>
      </select>
    </section>

    <br />

    <button @click="handleSignup">Sign Up</button>

    <p v-if="errorMessage" style="color:red;">
      {{ errorMessage }}
    </p>

    <p v-if="successMessage" style="color:green;">
      {{ successMessage }}
    </p>
  </div>
</template>
