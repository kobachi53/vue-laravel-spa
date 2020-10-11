import HeaderComponent from "./components/HeaderComponent";
import VueRouter from 'vue-router';
import TaskListComponent from "./components/TaskListComponent";

require('./bootstrap');

window.Vue = require('vue');
Vue.use(VueRouter);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component', HeaderComponent);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/tasks',
            name: 'task.list',
            component: TaskListComponent
        },
    ]
});

const app = new Vue({
    el: '#app',
    router
});
