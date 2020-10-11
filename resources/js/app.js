import HeaderComponent from "./components/HeaderComponent";

require('./bootstrap');

window.Vue = require('vue');


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component', HeaderComponent);

const app = new Vue({
    el: '#app',
});
