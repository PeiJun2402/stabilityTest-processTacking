<script setup>
import { RouterView } from 'vue-router';
import  department from '@/components/department.vue';

</script>

<template>
  <department />
  <div class="contentSection div80">
    <RouterView/>

  </div>



</template>


<style lang="scss" scoped>

.contentSection{
  padding: 2rem 3rem; 
  margin-bottom: 5rem;
  min-height: 80vh;
  box-shadow: 0px 0px 15px $gray10;

  border-radius: 2rem;
}

</style>
