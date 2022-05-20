<script setup>
</script>

<template>
    <ul>
        <li><a href="#unlogged-home">My Animes</a></li>
        <li><a href="#about">About</a></li>
        <li class="log-user"><a class="active" href="#log-in">Log In</a></li>
        <li class="log-user"><a  href="#register">Register</a></li>
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
