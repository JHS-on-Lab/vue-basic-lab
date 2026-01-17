<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';
// import { useRouter } from 'vue-router';

const authStore = useAuthStore();
// const router = useRouter();

const username = ref('');
const password = ref('');
const errorMessage = ref('');

const handleLogin = async () => {
    try {
        await authStore.login({
            username: username.value,
            password: password.value,
        });

        // 로그인 성공 후 보호 페이지로 이동
        // router.push({ name: 'protected' });
    } catch (error) {
        errorMessage.value = 'Login failed';
    }
};

const handleLogout = () => {
    authStore.logout();
};
</script>

<template>
    <div>
        <h2>Login</h2>

        <!-- 로그인 안 된 상태 -->
        <div v-if="!authStore.isAuthenticated">
            <input v-model="username" placeholder="tester" />

            <br />

            <input v-model="password" type="password" placeholder="1234" />

            <br />

            <button @click="handleLogin">Login</button>

            <p v-if="errorMessage">{{ errorMessage }}</p>
        </div>

        <!-- 로그인 상태 -->
        <div v-else>
            <p> Welcome, <strong>{{ authStore.username }}</strong> </p>

            <button @click="handleLogout">Logout</button>
        </div>

        <div>
            <br />

            <RouterLink :to="{ name: 'protected' }">Go to Protected Page</RouterLink>
        </div>
    </div>
</template>
