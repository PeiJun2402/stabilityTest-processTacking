<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useTestitemStore } from '@/pinia/testItem.js'

const TestitemStore = useTestitemStore();

const testNUB = ref("")
const untestNUB = ref("")

const emit = defineEmits(['filterTestItem']);



onMounted(async()=>{
  TestitemStore.testItems = []
  await TestitemStore.getData();

  const test = TestitemStore.testItems.filter((testItem)=>{
    return testItem.testStage !== "未執行"
  })
  const untest = TestitemStore.testItems.filter((testItem)=>{
    return testItem.testStage == "未執行"
  })

  testNUB.value = test.length
  untestNUB.value = untest.length


  const handleEmit = () => {
    emit('filterTestItem', TestitemStore.testItems);
     

};

handleEmit()

  


})



const testQty = ref({
    untest:untestNUB,
    test:testNUB

})





</script>

<template>
  <div class="saleData">
    <RouterLink to="/applyTestForm">
        <div class="testButton">
            <h3>APPLY FOR TESTING</h3>
            <p>申請安定性測試</p>
        </div>
    </RouterLink>
    <div class="untest">
        <p>未進行檢測</p>
        <h1>{{testQty.untest}}</h1>
    </div>
    <div class="test">
        <p>進行中檢測</p>
        <h1>{{testQty.test}}</h1>
    </div>
  </div>
  <hr>

</template>

<style lang="scss" scoped>
.saleData{
    padding: 2rem 0;
    margin: 1rem 0;
    @include layout(row,space-around,center);
    text-align: center;
    // background-color: aqua;

    .testButton{
        background-color: $primaryColor;
        padding: 2rem 2rem;
        border-radius: 3rem;
        transition: transform 0.5s ease;
        cursor: pointer;

        h3{
            font-size: 1.5rem;
            color: white;

        }
        p{
            letter-spacing: .5rem;
            font-weight: 400;
            color: white;
        }

        &:hover{
            transform: translate(0px,-1rem)
        }

    }
    .untest{
        p{
            letter-spacing: 1rem;
            color: $black70;

        }
        h1{
            font-size: 3.5rem;
            color: $primary1;
            margin-top: 1rem;
        }

    }

    .test{
        p{
            letter-spacing: 1rem;
            color: $black70;

        }
        h1{
            font-size: 3.5rem;
            color: $pointColor;
            margin-top: 1rem;
        }


    }
}


</style>