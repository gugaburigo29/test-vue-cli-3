import Vue from 'vue'
import Router from 'vue-router'

import PaginaInicial from '@/components/PaginaInicial'
import ControleDeTitulo from '@/components/controle-de-titulo/ControleDeTitulo'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/',
            name: 'PaginaInicial',
            component: PaginaInicial,
        },
        {
            path: '/controle-de-titulo/:id',
            name: 'ControleDeTitulo',
            component: ControleDeTitulo,
        },
    ]
})
