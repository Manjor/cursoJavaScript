<template>
    <header class="header">
        <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        <h1 class="title">
            {{title}}
        </h1>
    </header>
</template>

<script>
export default {
    name: 'Header',
    //Propriedades do Component
    props:{
        title: String,
        hideToggle: Boolean
    },
    computed:{
        icon(){
            return "fa-angle-left"
        }
    },
    methods:{
        toggleMenu(){
            
        }
    }
}
</script>

<style>
    .header{
        grid-area: header;
        background: linear-gradient(to right, #1e469a, #49a7c1);

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title{
        font-size: 1.2rem;
        color: white;
        font-weight: lighter;
        flex-grow: 1;
        text-align: center;
    }
    .title a{
        color: #FFF;
        text-decoration: none;
    }

    header.header > a.toggle {
        width: 60px;
        height: 100%;
        color: #FFF;
        justify-self: flex-start;
        text-decoration: none;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header.header > a.toggle:hover{
        background-color: #222a;
        transition: 0.6s;
    }
</style>
