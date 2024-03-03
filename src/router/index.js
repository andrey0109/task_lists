import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import TaskListPage from "../views/TaskListPage.vue";
const routes = [
    { path: "/", name: "Home", component: HomePage },
    { path: "/tasks", name: "TaskList", component: TaskListPage },
  ],
  router = createRouter({ history: createWebHistory(), routes: routes });
export default router;
