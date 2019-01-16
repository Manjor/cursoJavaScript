import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'

Vue.use(VueRouter)

const routes = [
    {name: 'home', path:'/',component: Home},
    {name: 'admin', path:'/admin',component: AdminPages},
]

export default new VueRouter({
    //Modo que irá aparecer a url, no caso history mostra como ela é, sem hash
    mode: 'history',
    routes: routes
})
