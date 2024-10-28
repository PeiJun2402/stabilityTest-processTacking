<script setup>
import { RouterView} from 'vue-router';
import  department from '@/components/department.vue';
import { onMounted, ref } from 'vue';

const mobile = ref(null)
const chickWidth = ()=>{
  const windowWidth = window.innerWidth;
  if(windowWidth < 750){
    mobile.value = true

  }else{
    mobile.value = false

  }

}

onMounted(()=>{
  chickWidth(),
  window.addEventListener("resize",chickWidth)
})

console.log(window.innerWidth)
console.log(mobile)







</script>

<template>
  <div  v-if="!mobile">
      <department />
    <div class="contentSection div80">
      <RouterView/>
    </div>
    
  </div>


  <div v-else class="mobileVersion">
    <h3>此應用程式僅支援電腦版本</h3>
    <p>this application is not supported on mobile device</p>
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

.mobileVersion{
  width: 100vw;
  height: 100vh;
  background-color: $black70;
  @include layout(column,center,center);

}

</style>
