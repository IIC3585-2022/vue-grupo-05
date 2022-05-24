<script setup>
import router from "./../router";
</script>

<template>
    <ul>
        <li><router-link to="/" class="logo">Home</router-link></li>
        <li class="my-animes"><router-link to="/myAnimes">My Animes</router-link></li>
        <li><router-link to="/about" class="about">About</router-link></li>
        <li class="log-user"><a  href="#unlogged-home">Log Out</a></li>
    </ul>
</template>

<style scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }
    
    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover:not(.active) {
        background-color: #111;
    }

    .active {
        background-color: #111;
    }
    
    .log-user {
        float: right;
    }
</style>

