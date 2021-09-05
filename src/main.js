import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'

// Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import("./pages/Home.vue"),
            children: [
                {
                    path: 'about',
                    name: 'about',
                    component: () => import("./pages/About.vue")
                },
                {
                    path: 'help',
                    name: 'help',
                    component: () => import("./pages/Help.vue")
                }
            ]
        },
        {
            path: '*',
            component: () => import("./pages/Home.vue")
        }
    ]
})

createApp(App).mount('#app')
// createApp(App, router).mount('#app')
// createApp(App).use(router).mount('#app')
