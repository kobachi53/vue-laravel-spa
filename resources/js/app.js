import HeaderComponent from "./components/HeaderComponent";
import VueRouter from 'vue-router';
import TaskListComponent from "./components/TaskListComponent";
import TaskShowComponent from "./components/TaskShowComponent";
import TaskCreateComponent from "./components/TaskCreateComponent";

require('./bootstrap');

window.Vue = require('vue');
Vue.use(VueRouter);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component', HeaderComponent);

const router = new VueRouter({
    mode: 'history',
    routes: [
        // タスク一覧
        {
            path: '/tasks',
            name: 'task.list',
            component: TaskListComponent
        },
        // タスク詳細
        {
            path: '/tasks/:taskId',
            name: 'task.show',
            component: TaskShowComponent,
            props: true
        },
        // タスク登録
        {
            path: '/tasks/create',
            name: 'task.create',
            component: TaskCreateComponent
        },
    ]
});

const app = new Vue({
    el: '#app',
    router
});
