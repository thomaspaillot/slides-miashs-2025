import { createApp } from "vue";
import { createWebHashHistory, createRouter } from "vue-router";
import App from "./App.vue";
import HomeView from "./HomeView.vue";
import CourseView from "./CourseView.vue";
import "reveal.js/dist/reveal.css";
import "./assets/theme.css";

const routes = [
  { path: "/", component: HomeView },
  { path: "/courses/:id", component: CourseView },
];

const baseUrl = import.meta.env.BASE_URL;

const router = createRouter({
  history: createWebHashHistory(baseUrl),
  routes,
});

createApp(App).use(router).mount("#app");
