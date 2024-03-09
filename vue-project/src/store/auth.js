import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
    }),
    getters: {
        user: (state) => state.authUser
    },
    actions: {
        async getToken() {
            await axios.get('/csrf-token')
        },
        async getUser() {
            await this.getToken()
            const data = await axios.get('/api/user')
            this.authUser = data.data
        },
        async handleLogin(data) {
            await this.getToken();
            // Make login request
            await axios.post('/login', {
                email: data.email,
                password: data.password
            });
            // router config from main.js btw
            this.router.push('/dashboard');
        }
    },
});
