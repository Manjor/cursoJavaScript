<template>
    <aside class="menu" v-show="isMenuVisible">
        <div class="menu-filter">
            <i class="fa fa-search fa-lg"></i>
            <input type="text" placeholder="Digite para Filtrar..." v-model="treeFilter" class="filter-field">
        </div>
        <Tree :data="treeData" :options="treeOptions" :filter="treeFilter" ref="tree" />
    </aside>
</template>

<script>
//Responsável por mapear um atributo do estado dentro do vuex
import { mapState } from 'vuex'
import Tree from 'liquor-tree'
import {baseApiUrl} from '@/global'
import axios from 'axios'
export default {
    name: 'Menu',
    components: { Tree },
    //Array de estados que deseja mapear dentro do Store
    computed: mapState(['isMenuVisible']),
    data: function(){
        return{
            treeFilter:'',
            treeData: this.getTreeData(),
            //Configurações da Arvore
            treeOptions: {
                propertyNames:{
                    'text':'name'
                },
                filter:{
                    emptyText: 'Categoria não encontrada'
                }
            }
        }
    },
    methods:{
        getTreeData(){
            const url = `${baseApiUrl}/categories/tree`
            return axios.get(url).then(res => res.data)
        }
    }
}
</script>

<style>
    .menu{
        grid-area: menu;
        background: linear-gradient(to right, #232526,#414345);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .menu a,
    .menu a:hover{
        color: white;
        text-decoration: none;
    }
    .menu .tree-node.selected > .tree-content,
    .menu .tree-node .tree-content:hover{
        background-color: rgba(255, 255, 255, 0.2);
    }
    .tree-arrow.has-child{
        filter: brightness(2)
    }
    .menu .menu-filter{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;
        padding-bottom: 8px;
        border-bottom: 1px solid #AAA;
    }
    .menu .menu-filter i{
        color: #AAA;
        margin-right: 10px;
    }
    .menu input{
        color: #CCC;
        font-size: 1.3rem;
        border: 0;
        outline: 0;
        widows: 100%;
        background: transparent;
    }
    .tree-filter-empty{
        color: #CCC;
        margin-left: 5px;
        font-size: 1.3rem;
    }
</style>
