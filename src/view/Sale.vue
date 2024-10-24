<script setup>
import saleFunciton from '@/components/saleFunciton.vue'
import testProject from '@/components/testProject.vue'
import finishedProject from '@/components/finishedProject.vue'
import { onMounted,ref } from 'vue';



const testItems = ref("");
const confirmMfrDate = ref("");





const receiveData = (data) => {
  testItems.value = data.filter((testItem)=>{
      return testItem.saleCheck.confirmMfr === false
})

 confirmMfrDate.value = data.filter((testItem)=>{
      return testItem.mfrDate !== null
});


};







</script>

<template>
  <saleFunciton
  @filterTestItem="receiveData"/>
  <ul>
    <li  v-for="testItem in testItems" :key="testItem.id">
      <testProject
      :clientName="testItem.clientName"
      :dueDate="testItem.dueDate"
      :testStage="testItem.testStage"
      :borderColor="testItem.borderColor"
      :id="testItem.id"
      :confirmMfr="testItem.saleCheck.confirmMfr"
      :development="testItem.development"
      />
    </li>

  </ul>
<div class="confirmMfrDate">
  <h5>已排程生產日期</h5>
  <p>Produce Date</p>
  <ul>
    <li  v-for="testItem in confirmMfrDate" :key="testItem.id">
      <finishedProject
      :clientName="testItem.clientName"
      :dueDate="testItem.dueDate"
      :testStage = "testItem.testStage"
      :borderColor = "testItem.borderColor"
      :id="testItem.id"
      :mfrDate="testItem.mfrDate"
      />
    </li>

  </ul>
</div>


</template>

<style lang="scss" scoped>

.confirmMfrDate{
  margin-top: 7rem;

  h5{
        font-size: 0.8rem;
        letter-spacing: 0.7rem;
        font-weight: 800;

    }

     p{
        font-size: 0.8rem;
        letter-spacing: 0.2rem;
        font-weight: 500;
    }

}



</style>
