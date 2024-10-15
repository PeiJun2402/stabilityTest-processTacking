<script setup>
import testProject from '@/components/testProject.vue'
import { useTestitemStore } from '@/pinia/testItem.js'


const TestitemStore = useTestitemStore();


</script>

<template>
  <ul>
    <li  v-for="testItem in TestitemStore.testItems" :key="testItem.id">
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

<style scoped>

</style>
