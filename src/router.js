import { createRouter, createWebHistory } from 'vue-router'


const history = createWebHistory()

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import("./pages/Home.vue"),
        children: [

        ]
    },
    {
        path: '/about',
        name: 'about',
        component: () => import("./pages/About.vue")
    },
    {
        path: '/help',
        name: 'help',
        component: () => import("./pages/Help.vue")
    },
    {
        path: '/',
        name: 'home',
        component: () => import("./pages/Home.vue")
    }
]
const router = createRouter({ history, routes })
export default router