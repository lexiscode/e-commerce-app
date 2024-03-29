import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        authErrors: [],
        authStatus: null,
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        status: (state) => state.authStatus
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
        async handleForgotPassword(sendEmail) {
            this.authErrors = [];
            await this.getToken();
            try {
                const response = await axios.post("/forgot-password", sendEmail);
                this.authStatus = response.data.status;
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleResetPassword(resetData) {
            this.authErrors = [];
            try {
                // Make post request
                const response = await axios.post("/password-reset", resetData);
                this.authStatus = response.data.status;
                // router config from main.js btw
                //this.router.push("/login");
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        }
    },
});
