<template>

    <h1>Welcome to Dashboard!</h1>

    <p>{{ user?.name }}</p>
    <p>{{ user?.email }}</p>

</template>

<script setup>

import {ref, onMounted} from 'vue'
import axios from 'axios'

const user = ref();
onMounted(async () => {
    const data = await axios.get('/api/user');
    user.value = data.data;
})

</script>

<style scoped>

</style>
