import Layout from '@/views/layout/Layout.vue'
export default [
    {
        path: '/',
        name: 'home',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/Home'),
                meta: {
                }
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/About.vue')
            },
            {
                path: '/test',
                name: 'test',
                component: () => import('@/views/Test.vue')
            }
        ]
    },

]
