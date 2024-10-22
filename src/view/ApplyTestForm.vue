<script setup>
import { ref,computed } from 'vue';
import { useTestitemStore } from '@/pinia/testItem.js'
import { nanoid } from 'nanoid';
import { useRouter } from 'vue-router';
import { db } from '@/firestore/firestoreInit.js';
import { collection, addDoc } from "firebase/firestore"; 

const router = useRouter();
const TestitemStore = useTestitemStore();
const uniqueId = nanoid(10).toUpperCase(); 



const testItem = ref({
    formID:null,
    clientName:null,
    dueDate:null,
    productML:null,
    sampleQty:null,
    ingredientForm:null,
    productPackage:null,
    testStage:"未執行",
    development:false,
    manufacture:false,
    remark:null,
    borderColor:"#58A9C3",
    test1Result:null,
    test2Result:{firstTemRecord:null, secondTemRecord:null, thirdTemRecord:null, fourthTemRecord:null},
    test3Result:null,
    test4Result:{
      test4Record:null,
      bacteria1:true,
      bacteria2:true,
      bacteria3:true,

    },
    test5Result:{
      emulsification:false,
      oilWaterSeparation:false

    },
    testPassed:{
      test1Passed:false,
      test2Passed:false,
      test3Passed:false,
      test4Passed:false,
      test5Passed:false,
    },
    testcheck:{
      test2check:true,
      test3check:true,
      test4check:true,
      test5check:true,

    },
    testPassButton:{
      test1PassButton:false,
      test2PassButton:false,
      test3PassButton:false,
      test4PassButton:false,
      test5PassButton:false,
      changeColor:false
    }




})

const addTestItem = async()=>{
  try{
    await addDoc(TestitemStore.collectRef,{
      formID: uniqueId,
      clientName:testItem.value.clientName,
      dueDate:testItem.value.dueDate,
      productML:testItem.value.productML,
      sampleQty:testItem.value.sampleQty,
      ingredientForm:testItem.value. ingredientForm,
      productPackage:testItem.value. productPackage,
      testStage:"未執行",
      development:false,
      manufacture:false,
      remark:testItem.value.remark,
      borderColor:"#58A9C3",
      test1Result:null,
      test2Result:{firstTemRecord:null, secondTemRecord:null, thirdTemRecord:null, fourthTemRecord:null},
      test3Result:null,
      test4Result:{
        test4Record:null,
        bacteria1:false,
        bacteria2:false,
        bacteria3:false,

      },
      test5Result:{
        emulsification:false,
        oilWaterSeparation:false

      },
      testPassed:{
        test1Passed:false,
        test2Passed:false,
        test3Passed:false,
        test4Passed:false,
        test5Passed:false,
      },
      testcheck:{
        test2check:true,
        test3check:true,
        test4check:true,
        test5check:true,

      },
      testPassButton:{
      test1PassButton:false,
      test2PassButton:false,
      test3PassButton:false,
      test4PassButton:false,
      test5PassButton:false,
      changeColor:false
    }


    })

    router.push({ name: 'Sale' });

  }
  catch(e){
        console.error("Error adding document: ", e);

    }



}



</script>

<template>
  <div class="applyTestForm">
    <h5>申請安定性測試表單</h5>
    <hr>
    <p>Form ID#<span>{{ uniqueId}}</span></p>
    <form @submit.prevent="addTestItem">
      <div class="formItem">
        <div class="clientNameSection">
          <label for="clientName">客戶名稱</label>
          <input type="text" id="clientName" v-model="testItem.clientName" required>
        </div>
        <div class="dueDateSection">
          <label for="dueDate">需求生產日期</label>
          <input type="date" id="dueDate" v-model="testItem.dueDate" required>
        </div>
        <div class="productMLSection">
          <label for="productML">產品容量</label>
          <input type="text" id="productML" v-model="testItem.productML" required>
        </div>
      

      
        <div class="sampleQtySection">
          <label for="sampleQty">檢測樣品數量</label>
          <input type="text" id="sampleQty" v-model="testItem.sampleQty" required>
        </div>
        <div class="ingredientFormSection" >
          <label for="ingredientForm">產品劑型</label>
          <input type="text" id="ingredientForm" v-model="testItem.ingredientForm" required>
        </div>
        <div class="peoductPackageSection">
          <label for="peoductPackage">產品包材</label>
          <input type="text" id="peoductPackage" v-model="testItem.productPackage" required>
        </div>
      
      
        <div class="remarkSection">
          <label for="remark">備註</label>
          <textarea type="text" id="remark" v-model="testItem.remark"></textarea>
        </div>

      </div>

      <div class="buttonSection">
        <input type="button" value="刪除表單">
        <input type="submit" value="送出申請">

      </div>
    
    </form>
  </div>

</template>

<style lang="scss" scoped>
.applyTestForm{
  h5{
    font-size: 1.8rem;
    letter-spacing: 0.8rem;
    text-align: center;

    margin: 2rem 0;

  }
  p{
    margin-top: 2rem;
    color: $gray30;

    font-size: 1.2rem;
    font-weight: 400;
    font-family: "Ubuntu", sans-serif;

    span{
      margin-left: 1rem;
      color: $primaryColor;
      font-weight: 700;

    }
  }

  .formItem{
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: 2rem;

    div{
      padding: 1rem 0;


      input{
        width: 100%;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }

    }
    .remarkSection{
      grid-column: 1 / 4;
      
      #remark{
        width: 100%;
        height: 100%;
        padding: 0.5rem;
        border-radius: 0.5rem;
        
      }
    }
  }

  .buttonSection{
    @include layout(row,center,center);
    margin: 5rem 0;

    input{
      width: 20%;
      padding: 1rem;
      margin:  0 2rem ;

      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0.2rem;

      &:nth-of-type(1){
        @include  buttonbStyle(none,$primaryColor,white)

      }
      &:nth-of-type(2){
        @include  buttonbStyle(none,$pointColor,white)

      }

    



    }
  }
}


label{
  @include labelText;
}


</style>
