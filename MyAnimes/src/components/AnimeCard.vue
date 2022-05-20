<script>
    export default {
        props: ['anime']
    }
</script>


<template>
    <div class="card__item">
        <div class="card">
            <div class="card__image card__image--fence">
                <a :href="anime.url" target="_blank">
                    <img 
                        :src="anime.images.jpg.image_url" 
                        :alt="anime.title + ' Poster'" 
                    />
                </a>
            </div>
            <div class="card__content">
                <div class="card__title">{{ anime.title }}</div>
                <p class="card__text">{{ anime.background }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

    img {
        height: auto;
        width: 250px;
        height: 350px;
        vertical-align: middle;
    }

    p {
        display: block;/* or inline-block */
        text-overflow: ellipsis;
        word-wrap: break-word;
        overflow: hidden;
        max-height: 100px;
    }

    .card__item {
        max-width: 250px;
        height: 550px;
        padding: 20px;
    }

    .links {
        padding-top: 20px;
    }

    .card {
        background-color: white;
        border-radius: 0.25rem;
        box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        width: 250px;
        height: 550px;
        padding: .5rem;
    }

    .card:hover {
        transform: scale(1.05);
    }

    .card__content {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
    }

    .card__image {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        filter: contrast(70%);
        overflow: hidden;
        position: relative;
        transition: filter 0.5s cubic-bezier(.43,.41,.22,.91);
    }

    .card__title {
        color: green;
        font-size: 1.2rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        padding-bottom: 10px;
        padding-top: 10px;
    }
    .card__text {
        flex: 1 1 auto;
        font-size: 0.875rem;
        line-height: 1.5;
        margin-bottom: 1.25rem;
    }



</style>
