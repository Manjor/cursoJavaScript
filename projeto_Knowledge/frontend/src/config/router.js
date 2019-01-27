import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ArticlesByCategory from '@/components/article/ArticlesByCategory'
import ArticleById from '@/components/article/ArticleById'

Vue.use(VueRouter)

const routes = [
    {name: 'home', path:'/',component: Home},
    {name: 'admin', path:'/admin',component: AdminPages},
    {name: 'articlesByCategory', path:'/categories/:id/articles',component: ArticlesByCategory },
    {name: 'articleById',path:'/articles/:id', component: ArticleById}
]

export default new VueRouter({
    //Modo que irá aparecer a url, no caso history mostra como ela é, sem hash
    mode: 'history',
    routes: routes
})
