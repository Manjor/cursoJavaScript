import Vue from 'vue'
import Toasted from 'vue-toasted'

//Habilita o uso do toasted no vue e define o padrão de icones e a duração
Vue.use(Toasted,{
    iconPack: 'fontawesome',
    duration: 3000
})

//Registra o toasted padrão no caso de operações bem sucedidas
Vue.toasted.register(
    'defaultSuccess',
    payload => !payload.msg ? 'Operação realizada com Sucesso!' : payload.msg,
    {type:'success',icon:'check'}
)

//Registra o toasted padrão no caso de operações mau sucedidas
Vue.toasted.register(
    'defaultError',
    payload => !payload.msg ? 'Ops... Erro Inesperado.' : payload.msg ,
    {type: 'error',icon:'times'}
)