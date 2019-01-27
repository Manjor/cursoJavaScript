import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App'
//Configurações
import './config/bootstrap'
import './config/msgs'
import store from './config/store'

import router from './config/router'

Vue.config.productionTip = false

//Temporário
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJhZG1pbiI6dHJ1ZSwiYWl0IjoxNTQ4NTg2NTQzLCJleHAiOjE1NDg4NDU3NDN9.cpIMarr5OagYTKvyzBXyXqSAQmOB1JWtCAolwVudTiM'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')