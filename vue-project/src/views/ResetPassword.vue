<template>

    <GuestLayout title="Reset Password">

      <form class="space-y-6" @submit.prevent="authStore.handleResetPassword(form)">

        <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">New Password</label>
        </div>
        <div class="mt-2">
        <input id="password" v-model="form.password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Repeat Password</label>
        </div>
        <div class="mt-2">
        <input id="password" v-model="form.password_confirmation"  type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        <a href="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">>> Go Back to Login</a>
      </p>

    </GuestLayout>

</template>

<script setup>
import GuestLayout from '../components/GuestLayout.vue'

import { useAuthStore } from '../store/auth';
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const authStore = useAuthStore()

const form = ref({
    password: '',
    password_confirmation: '',
    email: route.query.email,
    token: route.params.token
})

</script>
