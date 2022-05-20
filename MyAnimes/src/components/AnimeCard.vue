<script>
    export default {
        props: ['anime']
    }
</script>


<template>
    <div class="card">
        <a :href="anime.url" target="_blank">
            <img 
				:src="anime.images.jpg.image_url" 
				:alt="anime.title + ' Poster'" 
			/>
            <h3>{{ anime.title }}</h3>
        </a>
    </div>
</template>

<style scoped>
    div {
        background-color: #333;
        text-align: center;
        display: flex;
        padding: 1rem;
    }

    img {
        border-radius: 10px;
    }

    .links {
        padding-top: 20px;
    }



</style>
