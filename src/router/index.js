import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import About from '../components/About.vue'
import Parent from '../components/Parent.vue'
export default new Router({
    mode:'history',
    routes:[
        {
            path:'/about',
            name:'About',
            component:About
        },
        {
            path:'/parent',
            name:'Parent',
            component:Parent
        },
    ]
})