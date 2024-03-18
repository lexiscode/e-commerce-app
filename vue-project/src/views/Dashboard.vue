<template>
    <DefaultLayout>
        <h1>Welcome to Dashboard!</h1>

        <div v-if="authStore.user">
            <p>{{ authStore.user.name }}</p>
            <p>{{ authStore.user.email }}</p>
        </div>
        <div v-else>
            <p>Go to Login</p>
        </div>
    </DefaultLayout>

</template>

<script setup>
import DefaultLayout from "../components/DefaultLayout.vue";

import { onMounted } from "vue";
import { useAuthStore } from "../store/auth";

const authStore = useAuthStore();

onMounted(async () => {
    //getToken and getUser
    await authStore.getUser();
});

</script>

