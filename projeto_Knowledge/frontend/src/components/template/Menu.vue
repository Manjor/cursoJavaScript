<template>
    <aside class="menu" v-show="isMenuVisible">

    </aside>
</template>

<script>
//Responsável por mapear um atributo do estado dentro do vuex
import { mapState } from 'vuex'
export default {
    name: 'Menu',
    //Array de estados que deseja mapear dentro do Store
    computed: mapState(['isMenuVisible'])
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
</style>
