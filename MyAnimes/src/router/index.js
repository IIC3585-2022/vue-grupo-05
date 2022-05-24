import {createRouter, createWebHistory}  from 'vue-router'
import UnloggedHeader from "./../components/UnloggedHeader.vue";
import LoggedHeader from "./../components/LoggedHeader.vue";
import About from "./../components/About.vue";
import Register from "./../components/Register.vue";
import AllAnimes from "./../components/AllAnimes.vue";
import AnimeCard from "./../components/AnimeCard.vue";
import AnimeProfile from "./../components/AnimeProfile.vue";
import LogIn from "./../components/LogIn.vue"
import MyAnimes from "./../components/MyAnimes.vue";
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
    path: "/details/:id",
    name: "Details",
    component: AnimeProfile,
    props: true
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn
  },
  {
    path: "/myAnimes",
    name: "MyAnimes",
    component: MyAnimes
  },
];

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router
