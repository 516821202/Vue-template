import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/layout'
import configRoutes from './modules'

Vue.use(Router)

const commonRoutes = [
    {
        path: '/',
        name: 'index',
        redirect: '/example/index'
    },
    {
        path: '/404',
        component: () => import('@/views/notFound')
    },
    {
        path: '/example',
        component: layout,
        meta: {
            title: 'example',
            icon: 'chart'
        },
        children: [
            {
                path: 'index',
                component: () => import('@/views/example/index'),
                name: 'example',
                meta: {title: 'index'}
            },
        ]
    },
    {path: '*', redirect: '/404'}
]

const router = new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        ...configRoutes,
        ...commonRoutes
    ]
})


router.beforeEach(async (to, from, next) => {
    //设置标题
    document.title = to.meta.title || 'vue模版'
    next()
})


export default router

