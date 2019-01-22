<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard" sub="Base de Conhecimento"/>
        <div class="stats">
            <Stat title="Categorias" :value="stat.categories" icon="fa fa-folder" color="#ff4444"/>
            <Stat title="Artigos" :value="stat.categories" icon="fa fa-folder" color="#ffbb33"/>
            <Stat title="Usuários" :value="stat.users" icon="fa fa-folder" color="#33b5e5"/>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import Stat from './Stat'

import axios from 'axios'
import { baseApiUrl } from '@/global'
export default {
    name: 'Home',
    components: { PageTitle, Stat },
    data: function(){
        return {
            stat: {}
        }
    },
    methods: {
        getStats(){
            axios.get(`${baseApiUrl}/stats`).then(res =>{
                this.stat = res.data
                console.log(this.stat)
            })
        }
    },
    mounted(){
        this.getStats()
    }
}
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
