<script setup>
import testProject from '@/components/testProject.vue'
import { useTestitemStore } from '@/pinia/testItem.js'


const TestitemStore = useTestitemStore();


</script>

<template>
  <div class="DEdisplayTest">
    <div class="testing">
        <p>執行中檢測</p>
        <ul>
          <li  v-for="testItem in TestitemStore.testItems" :key="testItem.id ">
            <testProject
            :clientName="testItem.clientName"
            :dueDate="testItem.dueDate"
            :testStage = "testItem.testStage"
            :borderColor = "testItem.borderColor"
            :id="testItem.id"
            />
        </li>
        </ul>
    </div>
    <div class="untesting">
      <p>未執行檢測</p>
        <ul>

        </ul>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.DEdisplayTest{
    // background-color: aqua;

     p{
        color: $black80;
        font-weight: 700;
        letter-spacing: 0.5rem;
    }

    .untesting{
      margin-top: 5rem;
    }
}

</style>