//Area de Armazenamento para compartilhar entre os componentes
import Vue from 'vue'
import Vuex from 'vuex'

//Faz com que o Vue use o Vuex
Vue.use(Vuex)

//Exporta por padrão o Vue Store
export default new Vuex.Store({
    state:{
        //Incia o estado de visibilidade do menu em true
        isMenuVisible: true,
        user:{
            name: 'Usuário Manjor',
            email: 'manoeltavares.jr@gmail.com'
        }
    },
    mutations:{
        //Reponsavel por fazer a alternacia do estado do menu
        toggleMenu(state,isVisible){
            if(isVisible === undefined){
                //Se tiver verdadeiro vira falso e virse-versa
                state.isMenuVisible = !state.isMenuVisible
            }else{
                state.isMenuVisible = isVisible
            }
        }
    }
})