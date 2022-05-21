import {createRouter, createWebHistory}  from 'vue-router'
import HelloWorld from "./../components/HelloWorld.vue";
import TheWelcome from "./../components/TheWelcome.vue";
import UnloggedHeader from "./../components/UnloggedHeader.vue";
import LoggedHeader from "./../components/LoggedHeader.vue";
import About from "./../components/About.vue";
import Register from "./../components/Register.vue";
import AllAnimes from "./../components/AllAnimes.vue";
import AnimeCard from "./../components/AnimeCard.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: AllAnimes
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/details/:type/:id",
    name: "Details",
    component: AnimeCard
  }
];

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router