import HeaderComponent from "./components/HeaderComponent";
import VueRouter from 'vue-router';
import TaskListComponent from "./components/TaskListComponent";
import TaskShowComponent from "./components/TaskShowComponent";
import TaskCreateComponent from "./components/TaskCreateComponent";
import TaskEditComponent from "./components/TaskEditComponent";

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
        // タスク編集
        {
            path: '/tasks/:taskId/edit',
            name: 'task.edit',
            component: TaskEditComponent,
            props: true
        },
    ]
});

const app = new Vue({
    el: '#app',
    router
});
