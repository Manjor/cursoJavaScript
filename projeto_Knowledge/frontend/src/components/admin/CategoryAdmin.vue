<template>
    <div class="category-admin">
        <b-form>
            <input type="hidden" id="category-id" v-model="category.id"/>
            <b-row>
                <b-col md="12">
                    <b-form-group label="Nome:" label-for="category-name">
                        <b-form-input id="category-name" type="text" v-model="category.name"
                            require
                            :readonly="mode === 'remove'"
                            placeholder="Informe o Nome da Categoria..."/>
                    </b-form-group>
                </b-col>
                <b-col md="12" v-show="mode === 'save'">
                    <b-form-group label="Categoria Pai:" label-for="category-parentId">
                        <b-form-select id="category-parentId" :options="categories" v-model="category.parentId"/>
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
        <b-table hover striped :items="categories" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadCategory(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadCategory(data.item,'remove')">
                    <i class="fa fa-times"></i>
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'
export default {
    name: 'CategoryAdmin',
     data: function(){
        return{
            mode: 'save',
            category: {},
            categories: [],
            fields: [
                {key: 'id', label: 'Código',sortable: true},
                {key: 'name', label: 'Nome',sortable: true},
                {key: 'path', label: 'Caminho',sortable: true},
                {key: 'actions', label: 'Ações'}
            ]
        }
    },
    methods:{
        save(){
            const method = this.category.id ? 'put': 'post'
            const id = this.category.id ? `/${this.category.id}` : ''
            const url = `${baseApiUrl}/categories${id}`

            axios[method](url,this.category)
                .then(()=>{
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        },
        remove(){
            const id = this.category.id
            const url = `${baseApiUrl}/categories/${id}`
            axios.delete(url)
                .then(()=>{
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)

        },
        loadCategories(){
            const url = `${baseApiUrl}/categories`
            axios.get(url)
                .then(res =>{
                    //this.categories = res.data
                    this.categories = res.data.map(category =>{
                        return {...category , value: category.id, text:category.path}
                    })
                })
                .catch(showError)
        },
        loadCategory(category, mode = 'save'){
            this.mode = mode
            this.category = { ...category }
        },
        reset(){
            this.mode = 'save'
            this.category = {}
            this.loadCategories()
        }
    },
    mounted(){
        this.loadCategories()
    }
}
</script>

<style>

</style>
