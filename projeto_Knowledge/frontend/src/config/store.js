//Area de Armazenamento para compartilhar entre os componentes
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

//Faz com que o Vue use o Vuex
Vue.use(Vuex)

//Exporta por padrão o Vue Store
export default new Vuex.Store({
    state:{
        //Incia o estado de visibilidade do menu em true
        isMenuVisible: false,
        user: null
    },
    mutations:{
        //Reponsavel por fazer a alternacia do estado do menu
        toggleMenu(state,isVisible){
            if(!state.user){
                state.isMenuVisible = false
                return
            }

            if(isVisible === undefined){
                //Se tiver verdadeiro vira falso e virse-versa
                state.isMenuVisible = !state.isMenuVisible
            }else{
                state.isMenuVisible = isVisible
            }
        },
        setUser(state,user){
            state.user = user
            if(user){
                axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
                state.isMenuVisible = true
            }else{
                delete axios.defaults.headers.common['Authorization']
                state.isMenuVisible = false
            }
        }
    }
})