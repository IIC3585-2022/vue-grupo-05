<script setup>
  import UnloggedHeader from "./components/UnloggedHeader.vue";
  import LoggedHeader from "./components/LoggedHeader.vue";
  import { useStore } from 'vuex';
  const store = useStore();

</script>

<template>
  <header>
    <div v-if="store.state.token.length == 0">
      <UnloggedHeader />
    </div>
    <div v-if="store.state.token.length > 0">
      <LoggedHeader />
    </div>
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
