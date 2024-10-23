<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="notFoundPage">
        <h1>404 Not Found </h1>
        <p>請返回首頁</p>
        <RouterLink to="/">
            <h5>back to home page </h5>
        </RouterLink>

    </div>


</template>

<style lang="scss" scoped>
.notFoundPage{
    text-align: center;
    margin-top: 5rem;

    h5{
        padding: 1rem;
        width: 20%;
        margin: 2rem auto;
        @include buttonbStyle(none,$pointColor,white);

        font-size: 1rem;
        
    }

}


</style>
