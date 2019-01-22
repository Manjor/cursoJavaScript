import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App'
//Configurações
import './config/bootstrap'
import store from './config/store'

import router from './config/router'

Vue.config.productionTip = false

//Temporário
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ik1hbm9lbCIsImVtYWlsIjoibWFub2VsdGF2YXJlc0BlbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiYWl0IjoxNTQ4MTU3NDY0LCJleHAiOjE1NDg0MTY2NjR9.xs-cSMDwx69LQ5q1KU6Vmp5f9L1P6-SKP9BnQ-BrRfg'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')