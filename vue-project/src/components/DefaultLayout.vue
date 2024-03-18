<template>
    <slot>
        <router-view></router-view>
    </slot>
</template>

<script setup>

import { onMounted } from "vue";
import { useAuthStore } from "../store/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

onMounted(async () => {
  await authStore.getUser();

  // Redirecting to the login route if user is not logged in
  if (!authStore.user) {
    router.push({ name: 'login' });
  }
});

</script>

<style scoped>
/* Your component styles */
</style>
