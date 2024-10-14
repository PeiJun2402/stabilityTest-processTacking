<script setup>
import saleFunciton from '@/components/saleFunciton.vue'
import testProject from '@/components/testProject.vue'
import { useTestitemStore } from '@/pinia/testItem.js'

const TestitemStore = useTestitemStore();


</script>

<template>
  <saleFunciton/>
  <ul>
    <li  v-for="testItem in TestitemStore.testItems" key=" TestitemStore.testItem.value.formID ">
      <testProject
      :clientName="testItem.value.clientName"
      :dueDate="testItem.value.dueDate"
      :testStage = "testItem.value.testStage"
      :borderColor = "testItem.value.borderColor"
      />
    </li>

  </ul>

</template>

<style scoped>

</style>
