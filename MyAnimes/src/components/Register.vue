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
                
            <button type="submit">Sign Up</button>
        </div>
    </form>    
    
</template>

<style scoped>
    div, h3, h5, p, a {
        float: center;
        text-align: center;
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

    div {
        text-align: center;
        padding-top: 100px;
        min-height: 100%;
    }

    form {
        width: 420px;
        padding-top: 40px;
        display: block;
        margin-left: auto;
        margin-right: auto;

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
    }

    button:hover {
        opacity: 1;
    }

    input[type=text], input[type=password] {
        width: 100%;
        padding: 15px;
        margin: 5px 0 22px 0;
        display: inline-block;
        border: none;
        background: #f1f1f1;
        width: 400px;
    }

    input[type=text]:focus, input[type=password]:focus {
        background-color: #ddd;
        outline: none;
    }

    .links {
        padding-top: 20px;
    }

    .container {
        padding: 16px;
        background-color: white;
        width: 420px;
        border-radius: 10px;
    }



</style>
