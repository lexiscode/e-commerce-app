import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        authErrors: [],
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
    },
    actions: {
        async getToken() {
            await axios.get("/csrf-token");
        },
        async getUser() {
            await this.getToken();
            const data = await axios.get("/api/user");
            this.authUser = data.data;
        },
        async handleLogin(data) {
            this.authErrors = [];
            await this.getToken();
            try {
                // Make login request
                await axios.post("/login", {
                    email: data.email,
                    password: data.password,
                });
                // router config from main.js btw
                this.router.push("/dashboard");
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleLogout() {
            await axios.post("/logout");
            this.authUser = null;
        },
        async handleForgotPassword(data) {
            this.authErrors = [];
            await this.getToken();
            try {
                await axios.post("/forgot-password", {
                    email: data.email,
                });
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
    },
});
