<!-- https://tailwindui.com/components/application-ui/forms/sign-in-forms -->

<template>
    <GuestLayout title="Sign in to your account">
        <form class="space-y-6" @submit.prevent="authStore.handleLogin(form)">
            <div>
                <label
                    for="email"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Email address</label
                >
                <div class="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        v-model="form.email"
                        autocomplete="email"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div v-if="authStore.errors.email">
                    <span class="text-red-400 text-sm m-2 p-2">
                        {{ authStore.errors.email[0] }}
                    </span>
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label
                        for="password"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Password</label
                    >
                    <div class="text-sm">
                        <a
                            href="/forgot-password"
                            class="font-semibold text-indigo-600 hover:text-indigo-500"
                            >Forgot password?</a
                        >
                    </div>
                </div>
                <div class="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        v-model="form.password"
                        autocomplete="current-password"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <div v-if="authStore.errors.password">
                        <span class="text-red-400 text-sm m-2 p-2">
                            {{ authStore.errors.password[0] }}
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign in
                </button>
            </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
            Not a member yet?
            <a
                href="/register"
                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >Sign Up!</a
            >
        </p>
    </GuestLayout>
</template>

<script setup>
import GuestLayout from "../components/GuestLayout.vue";

import { ref } from "vue";
import { useAuthStore } from "../store/auth";

const authStore = useAuthStore();

const form = ref({
    email: "",
    password: "",
});
</script>
