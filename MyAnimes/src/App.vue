<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import UnloggedHeader from "./components/UnloggedHeader.vue";
import LoggedHeader from "./components/LoggedHeader.vue";
import About from "./components/About.vue";
import Register from "./components/Register.vue";
import AllAnimes from "./components/AllAnimes.vue";
</script>

<template>
  <header>
    <UnloggedHeader />
  </header>

  <main>
    <AllAnimes />
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
