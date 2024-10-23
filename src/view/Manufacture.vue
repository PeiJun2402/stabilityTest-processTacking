<script setup>
import testProject from '@/components/testProject.vue'
import { useTestitemStore } from '@/pinia/testItem.js'
import { onMounted,ref } from 'vue';


const TestitemStore = useTestitemStore();

const mfrForm = ref("");
const detectForm = ref(true);


const filterFunction = ()=>{
  mfrForm.value = TestitemStore.testItems.filter((testItem)=>{
    return testItem.saleCheck.confirmMfr === true  && testItem.manufacture === false
  })

}



const detectFormFunction =()=>{
  if( mfrForm.value.length !== 0){
    detectForm.value = !detectForm.value
  }


}

onMounted(async()=>{
  TestitemStore.testItems = []
  await TestitemStore.getData();
  filterFunction();
  detectFormFunction();


  
})


</script>

<template>
  <h2 v-if="detectForm">!無任何產品通過安定性測試，尚無排單需求!</h2>
  <ul>
    <li  v-for="testItem in mfrForm" :key="testItem.id">
      <testProject
      :clientName="testItem.clientName"
      :dueDate="testItem.dueDate"
      :testStage = "testItem.testStage"
      :borderColor = "testItem.borderColor"
      :id="testItem.id"
      />
    </li>

  </ul>

</template>

<style lang="scss" scoped>
h2{
  text-align: center;
  color: $pointColor;
  letter-spacing: 0.5rem;
  margin-top: 2rem;
}

</style>
