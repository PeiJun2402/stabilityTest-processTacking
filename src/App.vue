<script setup>
import { RouterView,useRoute } from 'vue-router';
import  department from '@/components/department.vue';
import { computed, onMounted,ref, watch } from 'vue';


const route =useRoute();
const homePageWord =ref(true)

watch(() => route.path,(newvalue,oldValue)=>{
  
  if(newvalue !== "/"){
    homePageWord.value = false
  }

})


</script>

<template>
  <department />
  <div class="contentSection div80">
    <div class="homePageWord" v-if="homePageWord">
      <h5>-- 請選擇上方所屬部門 --</h5>
      <p>Please select your department</p>
    </div>
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

  .homePageWord{
    margin-top: 5rem;

    h5{
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.5rem;
    text-align: center;

   
    color: $black60;
  }
  p{
    font-size: 1rem;
    letter-spacing: 0.5rem;
    text-align: center;

    margin-top: 0.5rem;
    color: $black60;
  }

  }

  
}

</style>
