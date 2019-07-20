import Home from '@/views/Home.vue'
export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'hahaha'
        },
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue')
    }
]
