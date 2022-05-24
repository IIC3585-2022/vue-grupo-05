<script>
    export default {
        data() {
            return {
                dataReady: false,
                animeData: [],
                animeComments: []
            }
        },
        props: ['id'],
        computed: {
            getAnimeData: function () {
                return [this.animeData, this.animeComments];
            }
        },
        methods: {
            handleSubmit: async function(event) {
                if (event) {
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");
                    await fetch("http://localhost:8001/api/review", {
                            method: 'POST',
                            headers: myHeaders,
                            body: JSON.stringify({
                                "animeId": parseInt(this.id),
                                "email": "user@uc.cl",
                                "text": event.target.elements.name.value
                            }),
                            redirect: 'follow'
                    })
                        .then(res => {
                            if (res.status == 400) {
                                alert("Ya escribiste una review en este anime.")
                            } 
                            return res.json();
                        })
                        .then(data => {
                            try {
                                console.log(data.email)
                                this.animeComments.push(data)
                            } catch {}
                        })
                        .finally(
                            event.target.elements.name.value = '',
                        )
                        .catch(err => console.log("ERR: ", err))
                }
                
            }
        },
        async mounted() {
            await fetch(`https://api.jikan.moe/v4/anime/${this.id}`)
                .then(res => res.json())
                .then(data => this.animeData = data)
            await fetch(`http://localhost:8001/api/review/anime/${this.id}`, {
                method: 'GET', redirect: 'follow'
            })
                .then(res => res.json())
                .then(data => this.animeComments = data)

            this.dataReady = true;
        }
    }
    
</script>


<template>
    <div class="container" v-if="dataReady">
        <div class="card__title">{{ getAnimeData[0].data.title }}</div>
        <div class="card__content">
            <div class="card__image card__image--fence">
                <img 
                    :src=getAnimeData[0].data.images.jpg.image_url 
                    :alt="getAnimeData[0].data.title + ' Poster'" 
                />
                <div class="div-button"><button> Add to My Animes</button></div>
            </div>
            <p class="card__text">{{ getAnimeData[0].data.synopsis }}</p>
        </div>
    </div>
    <div class="comments">
        <h3>Reviews</h3>
        <div v-if="getAnimeData[1].length > 0">
            <div class="box-comment" v-for="comment in getAnimeData[1]" :key="comment.key.email">
                <div class="user-comment">
                    <div class="email">{{ comment.key.email }}: </div>
                    <div class="text">{{ comment.text }}</div>
                </div>
            </div>
        </div>
        <div class="add-comment">
            <form class="new-comment-box" @submit.prevent="handleSubmit">
                <input 

                    type="text" 
                    class="text-field" 
                    placeholder="Add your review" 
                    required
                    ref="comment"
                    name="name"
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
