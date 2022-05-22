<script>
    import { ref } from 'vue';
    export default {
        data() {
            return {
                dataReady: false,
                animeData: []
            }
        },
        props: ['id'],
        computed: {
            getAnimeData: function () {
                console.log("this: ", this)
                return this.animeData
            }
        },
        async mounted() {
            await fetch(`https://api.jikan.moe/v4/anime/${this.id}`)
                .then(res => res.json())
                .then(data => this.animeData = data)
            this.dataReady = true;
        }

    }
</script>


<template>
    <div class="container" v-if="dataReady">
        <div class="card__title">{{ getAnimeData.data.title }}</div>
        <div class="card__content">
            <div class="card__image card__image--fence">
                <img 
                    :src=getAnimeData.data.images.jpg.image_url 
                    :alt="getAnimeData.data.title + ' Poster'" 
                />
                <div class="div-button"><button> Add to My Animes</button></div>
            </div>
            <p class="card__text">{{ getAnimeData.data.synopsis }}</p>
        </div>
    </div>
    <div class="comments">
        <h3>Comments</h3>
        <div class="box-comment">
            <div class="user-comment">
                <div class="email">jminostroza@uc.cl: </div>
                <div class="text">muy buena askjhdjh ahsdd askdasd ksdha jsdhs ksdha ksdah asjhd</div>
            </div>
        </div>
        <div class="box-comment">
            <div class="user-comment">
                <div class="email">elias@uc.cl: </div>
                <div class="text">muy buena askjhdjh ahsdd askdasd ksdha jsdhs ksdha ksdah asjhd</div>
            </div>
        </div>
        <div class="box-comment">
            <div class="user-comment">
                <div class="email">samuel@uc.cl: </div>
                <div class="text">muy buena askjhdjh ahsdd askdasd ksdha jsdhs ksdha ksdah asjhd</div>
            </div>
        </div>
        <div class="add-comment">
            <form class="new-comment-box" @submit.prevent="HandleSubmit">
                <input 
                    type="text" 
                    class="text-field" 
                    placeholder="Add a comment" 
                    required
                />
            </form>
        </div>
    </div>
    



</template>

<style scoped>

    img {
        width: 250px;
        vertical-align: middle;
    }

    p {
        display: block;/* or inline-block */
        text-overflow: ellipsis;
        word-wrap: break-word;
        overflow: hidden;
        color: white;
    }

    h3 {
        color: white;
        font-size: 2.5rem;
        letter-spacing: 2px;
        padding-bottom: 15px;
    }

    input {
        font-size: 1rem;
        display: block;
        padding: 10px;
        width: 98.7%;
        opacity: 1;
        border-radius: 10px;
        height: 30px;
    }

    button {
        background-color: #03c04a;
        color: white;
        padding: 16px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        opacity: 0.9;
        font-size: 15px;
        font-weight: bold;
    }

    button:hover {
        opacity: 1;
    }

    .div-button {
        padding-top: 10px;
    }
    .links {
        padding-top: 20px;
    }

    .container {
        display: flex;
        flex-direction: column;
        padding: 50px;
        width: 90%;
    }

    .card__content {
        display: flex;
        flex: 1 1 auto;
        flex-direction: row;
        margin-left: auto;
        margin-right: auto;
    }

    .card__image {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        overflow: hidden;
        position: relative;
        transition: filter 0.5s cubic-bezier(.43,.41,.22,.91);
        width: 250px;
    }

    .card__title {
        color: white;
        font-size: 3.9rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        padding-bottom: 30px;
    }
    .card__text {
        flex: 1 1 auto;
        font-size: 18px;
        line-height: 1.5;
        margin-bottom: 1.25rem;
        max-width: 70%;
        padding-left: 50px;
    }

    .comments { 
        display: flex;
        flex-direction: column;
        padding-left: 50px;
        width: 90%;
    }

    .user-comment { 
        display: flex;
        flex-direction: column;
        padding: 10px;
        background-color: #3f3f3f;
        color: white;
        border-radius: 10px;
    }

    .box-comment {
        padding-bottom: 10px;
    }
    .email {
        font-size: 17px;
        font-weight: bold;
    }

    .text {
        padding-left: 30px;
        padding-top: 8px;
    }

    .add-comment {
        display: flex;
        flex-direction: column;
        padding-bottom: 40px;
    }



</style>
