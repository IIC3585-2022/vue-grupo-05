<script setup>
    import { ref } from 'vue';
    import AnimeCard from "./AnimeCard.vue";

    const search_query = ref("");
    

    const allAnimes = ref([]);
    const fillAnimes = async () => {
		allAnimes.value = await fetch('https://api.jikan.moe/v4/top/anime')
            .then(res => res.json())
            .then(data => data.data);
    }
    fillAnimes();
    
    const HandleSearch = async () => {
		allAnimes.value = await fetch(`https://api.jikan.moe/v4/anime?q=${search_query.value}&sfw`)
            .then(res => res.json())
            .then(data => data.data);
        search_query.value = "";
    }

</script>

<template>
    <form class="search-box" @submit.prevent="HandleSearch">
        <input 
            type="search" 
            class="search-field" 
            placeholder="Search Anime" 
            required
            v-model="search_query"
        />
    </form>
    <div class="all-cards" v-if="allAnimes.length > 0">
        <AnimeCard 
            v-for="anime in allAnimes"
            :key="anime.mal_id"
            :anime="anime"
        />
    </div>
</template>

<style scoped>

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: white;
    }

    form {
        background-color: #333;
        color: white;
    }
    input {
        font-size: 1rem;
        display: block;
        padding: 0.625rem 16px 0.625rem 50px;
        width: 20%;
        line-height: 24px;
        color: white;
        background-color: #333;
        border: 1px solid #ffffff;
        border-radius: 30px;
        opacity: 1;
        transition: background-color 0.5s ease;
        margin-right: auto;
        margin-left: auto;
    }

    .all-cards {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        background-color: #333;
        justify-content: center;
        padding: .5rem;
    }

    .links {
        padding-top: 20px;
    }



</style>
