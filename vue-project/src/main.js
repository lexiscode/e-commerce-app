import { createApp } from 'vue'
import {createPinia} from 'pinia'

import store from './store'
import router from './router'
import "./index.css"
import './axios'

import App from './App.vue'

const pinia = createPinia();
// const app = createApp(App)
createApp(App).use(pinia).use(store).use(router).mount('#app')
