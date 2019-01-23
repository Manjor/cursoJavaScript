<template>
    <div class="article-admin">
        <b-form>
            <b-row>
                <b-col md="12">
                    <input type="hidden" id="article-id" v-model="article.id"/>
                    <b-form-group label="Nome:" label-for="article-name">
                        <b-form-input id="article-name" type="text" v-model="article.name"
                            require
                            :readonly="mode === 'remove'"
                            placeholder="Informe o Nome do Artigo..."/>
                    </b-form-group>
                    <b-form-group label="Descrição:" label-for="article-description">
                        <b-form-input id="article-description" type="text" v-model="article.description"
                            require
                            :readonly="mode === 'remove'"
                            placeholder="Informe a Descrição do Artigo..."/>
                    </b-form-group>
                    <b-form-group label="Imagem (URL):" label-for="article-imageUrl">
                        <b-form-input id="article-imageUrl" type="text" v-model="article.imageUrl"
                            require
                            :readonly="mode === 'remove'"
                            placeholder="Informe a URL da Imagem..."/>
                    </b-form-group>
                    <b-form-group v-if="mode === 'save'" label="Categoria:" label-for="article-categoriesId">
                        <b-form-select id="article-categoriesId" 
                            :options="categories" v-model="article.categoriesId"/>
                    </b-form-group>
                    <b-form-group v-if="mode === 'save'" label="Autor" label-for="article-userId">
                        <b-form-select :options="users" v-model="article.userId"/>
                    </b-form-group>
                    <b-form-group v-show="mode === 'save'">
                        <VueEditor v-model="article.content" placeholder="Informe o Conteúdo do Artigo"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-button variant="primary" @click="save" v-show="mode === 'save'" class="mr-2">Salvar</b-button>
                    <b-button variant="danger" @click="remove" v-show="mode === 'remove'" class="mr-2">Remover</b-button>
                    <b-button @click="reset">Cancelar</b-button>
                </b-col>
            </b-row>
        </b-form>
        <hr>
        <b-table hover striped :items="articles" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadArticle(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadArticle(data.item,'remove')">
                    <i class="fa fa-times"></i>
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'
export default {
    name: 'ArticleAdmin',
    components: { VueEditor },
     data: function(){
        return{
            mode: 'save',
            article: {},
            articles: [],
            categories: [],
            users: [],
            page: 1,
            limit: 0,
            count: 0,
            fields: [
                {key: 'id', label: 'Código',sortable: true},
                {key: 'name', label: 'Nome',sortable: true},
                {key: 'description', label: 'Descrição',sortable: true},
                {key: 'actions', label: 'Ações'}
            ]
        }
    },
    methods:{
        save(){
            const method = this.article.id ? 'put': 'post'
            const id = this.article.id ? `/${this.article.id}` : ''
            const url = `${baseApiUrl}/articles${id}`

            axios[method](url,this.article)
                .then(()=>{
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        },
        remove(){
            const id = this.article.id
            const url = `${baseApiUrl}/articles/${id}`
            axios.delete(url)
                .then(()=>{
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)

        },
        loadArticles(){
            const url = `${baseApiUrl}/articles`
            axios.get(url).then( res =>{
                //this.articles = res.data
                this.articles = res.data.data
                this.count = res.data.count
                this.limit = res.data.limit
            })
        },
        loadArticle(article, mode = 'save'){
            this.mode = mode
            //this.article = { ...article }
            axios.get(`${baseApiUrl}/articles/${article.id}`)
                .then(res => this.article = res.data)
        },
        reset(){
            this.mode = 'save'
            this.article = {}
            this.loadArticles()
        },
        loadCategories(){
            const url = `${baseApiUrl}/categories`
            axios.get(url).then(res =>{
                this.categories = res.data.map(category =>{
                    return { value: category.id, text:category.path}
                })
                
            })
        },
        loadUsers(){
            const url = `${baseApiUrl}/users`
            axios.get(url).then(res => {
                this.users = res.data.map(user =>{
                    return {value:user.id, text: `${user.name} - ${user.email}`}
                })
            })
        }
    },
    mounted(){
        this.loadArticles(),
        this.loadCategories(),
        this.loadUsers()
    }
}
</script>

<style>

</style>
