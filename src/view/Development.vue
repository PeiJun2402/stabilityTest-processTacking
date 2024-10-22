<script setup>
import testProject from '@/components/testProject.vue'
import { useTestitemStore } from '@/pinia/testItem.js'
import { onMounted,ref, watch } from 'vue';


const TestitemStore = useTestitemStore();

const test = ref("")
const untest = ref("")

const filterFunction = ()=>{
  test.value = TestitemStore.testItems.filter((testItem)=>{
    return testItem.testStage !== "未執行" && testItem.development === false
  })
  untest.value = TestitemStore.testItems.filter((testItem)=>{
    return testItem.testStage == "未執行"
  })

}




onMounted(async()=>{
  TestitemStore.testItems = []
  await TestitemStore.getData();
  filterFunction();

  
})

watch(()=> TestitemStore.testItems,()=>{
  filterFunction();

}, { deep: true })





</script>

<template>
  <div class="DEdisplayTest">
    <div class="testing">
        <h5>執行中檢測</h5>
        <p>Test Processing</p>
        <ul>
          <li  v-for="testItem in test" :key="testItem.id ">
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
      <h5>未執行檢測</h5>
      <p>Test Unprocessing</p>
        <ul>
          <li  v-for="testItem in untest" :key="testItem.id ">
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
  </div>

</template>

<style lang="scss" scoped>
.DEdisplayTest{
    // background-color: aqua;

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

    .untesting{
      margin-top: 5rem;
    }
}

</style>