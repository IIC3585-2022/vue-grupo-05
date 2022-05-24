<script setup>
    import { ref, onMounted } from 'vue';
    import { useStore } from 'vuex';
    import AnimeCard from "./AnimeCard.vue";
   
    const store = useStore();

    const dataReady = ref(false);
    
    onMounted( async () => {
      const token = store.state.token;
      const email = store.state.email;
      let animeIds = [];

      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      await fetch("https://vue-grupo5-backend.herokuapp.com/api/user/anime", requestOptions)
        .then(response => response.json())
        .then(result => animeIds = result.animes)
        .catch(error => console.log('error', error)); 
      console.log("ANIMES IDES: ", animeIds);
      for(let i = 0; i < animeIds.length; i++){
        await fetch(`https://api.jikan.moe/v4/anime/${animeIds[i]}`)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.data) 
            {
              store.dispatch('addAnimeToMyAnimes', data.data);
            }

          });
      }

      dataReady.value = true;
    });
</script>

<template>
    <div class="all-cards" v-if="store.state.myAnimes.length > 0">
        <AnimeCard 
            v-for="anime in store.state.myAnimes"
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
