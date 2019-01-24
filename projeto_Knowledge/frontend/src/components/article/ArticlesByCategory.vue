<template>
    <div class="articles-by-category">
        <PageTitle icon="fa fa-folder-o"
            :main="category.name" sub="Categoria"/>
            <ul>
                <li v-for="article in articles" :key="article.id">
                    {{ article.name }}
                </li>
            </ul>
            <div class="load-more">
                <b-button v-if="loadMore" variant="outline-primary" @click="getArticles" class="btn-lg">
                    Carregar Mais Artigos
                </b-button>
            </div>
    </div>
</template>
<script>
import { baseApiUrl,showError } from '@/global'
import axios from 'axios'
import PageTitle from '../template/PageTitle'

export default {
    name:'ArticlesByCategory',
    components:{ PageTitle },
    data: function(){
        return{
            category: {},
            articles:[],
            page: 1,
            loadMore: true
        }
    },
    methods:{
        getCategory(){
            const url = `${baseApiUrl}/categories/${this.category.id}`
            axios.get(url).then(res => this.category = res.data)
        },
        getArticles(){
            const url = `${baseApiUrl}/categories/${this.category.id}/articles?page=${this.page}`
            axios.get(url).then(res =>{
                //Concatena o resultado com o que ja possui em articles, pois a paginação
                //será de expansão para baixo
                this.articles = this.articles.concat(res.data)
                this.page++
                //Seta o loadMore para false, pois acabou as paginações
                if(res.data.length === 0) this.loadMore = false
            }).catch(showError)
        }
    },
    mounted(){
        this.category.id = this.$route.params.id
        this.getCategory()
        this.getArticles()
    }
}
</script>
<style>
    .articles-by-category ul{
        list-style: none;
        padding: 0;
    }
    .articles-by-category .load-more{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 25px;
    }
</style>

