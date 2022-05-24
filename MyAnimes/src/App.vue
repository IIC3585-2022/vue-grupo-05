<script setup>
import UnloggedHeader from "./components/UnloggedHeader.vue";
import LoggedHeader from "./components/LoggedHeader.vue";
import About from "./components/About.vue";
import Register from "./components/Register.vue";
import AllAnimes from "./components/AllAnimes.vue";
import LogIn from "./components/LogIn.vue";
import AnimeCard from "./components/AnimeCard.vue"
</script>

<template>
  <header>
    <LoggedHeader />
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  position:relative;

}


header {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
        position:absolute;
        height:50px;
        width:100%;
    }

main {
  position:absolute;
  top:50px;
  width:100%;
  bottom: 0;
}


</style>
