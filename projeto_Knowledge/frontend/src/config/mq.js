import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq,{
    breakpoints:{
        xs: 576,
        sm: 768,
        mc: 960,
        lg: 1140,
        xl: Infinity
    }
})