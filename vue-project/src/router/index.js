import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import NotFound from "../views/NotFound.vue";


const routes = [
    {
        path: "/",
        component: GuestLayout,
        children: [
            {
                path: "/",
                name: "home",
                component: Home,
            },
            {
                path: "login",
                name: "login",
                component: Login,
            },
            {
                path: "register",
                name: "register",
                component: Register,
            },
            {
                path: "forgot-password",
                name: "forgot-password",
                component: ForgotPassword,
            },
            {
                path: "password-reset/:token",
                name: "password-reset",
                component: ResetPassword,
            },
        ],
    },
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: Dashboard,
            },
        ],
    },
    {
        path: "/:catchAll(.*)",
        name: "notfound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
