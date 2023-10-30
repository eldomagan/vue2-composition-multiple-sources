import Vue from 'vue'
import Counter from './Counter.vue'

window.Vue = Vue;

Vue.component('main-counter', Counter);

window.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el:'#app',

        mounted() {
            console.log('main mounted');
        }
    });
})