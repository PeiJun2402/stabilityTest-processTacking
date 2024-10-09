<script setup>
import { RouterView , RouterLink } from 'vue-router';

</script>

<template>
  <h1>setting website</h1>
  <RouterView/>
  <ul>
    <li><RouterLink to="/home">home</RouterLink></li>
  </ul>

</template>

<style scoped>

</style>
