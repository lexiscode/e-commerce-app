<template>

    <GuestLayout title="Forgot Password">

        <form class="space-y-6" @submit.prevent="authStore.handleForgotPassword(email)">
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                    <input id="email" v-model="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                <div v-if="authStore.errors.email">
                    <span class="text-red-400 text-sm m-2 p-2">
                        {{ authStore.errors.email[0] }}
                    </span>
                </div>
            </div>

            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
            </div>
        </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        <a href="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">>> Go Back</a>
      </p>

    </GuestLayout>

</template>

<script setup>
import GuestLayout from '../components/GuestLayout.vue'

import { ref } from "vue";
import { useAuthStore } from "../store/auth";

const authStore = useAuthStore();

const email = ref('');

</script>
