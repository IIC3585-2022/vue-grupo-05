<script setup>
</script>

<template>    
    <h3>Register</h3>
    <form>
        <div class="container">
            <label for="uname"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>
                
            <button type="submit">SignUp</button>
        </div>

        <div class="container" style="background-color:#f1f1f1">
            <button type="button" class="cancelbtn">Cancel</button>
            <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
    </form>    
    
</template>

<style scoped>
    div, h3, h5, p, a {
        float: center;
    }

    h3, h5, p {
    color: white;
    } 

    h3 {
        font-size: 5rem;
    }

    h5 {
        font-size: 1.5rem;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    a {
        color: #fd9330;
    }

    div {
        background-color: #333;
        text-align: center;
        padding-top: 100px;
        min-height: 100%;
    }

    .links {
        padding-top: 20px;
    }



</style>
