<script setup>
import { useRoute,useRouter } from 'vue-router';
import { onMounted, ref,computed } from 'vue';
import { useTestitemStore } from '@/pinia/testItem.js'
import { db } from '@/firestore/firestoreInit.js';
import { doc, updateDoc } from "firebase/firestore"; 

const route =useRoute();
const router =useRouter();
const testItemId = route.params.id;
const TestitemStore = useTestitemStore();

const testItem = ref({
    formID:null,
    clientName:null,
    dueDate:null,
    productML:null,
    sampleQty:null,
    ingredientForm:null,
    productPackage:null,
    remark:null,
})


onMounted( async()=>{
  TestitemStore.testItems = []
  try {
    await TestitemStore.getData();
    findFuntion();
   
  } 
  catch (error) {
    console.error('Error loading data:', error);
  } 

})

const findFuntion =() =>{
  testItem.value = TestitemStore.testItems.find((testItem)=>{
    return testItem.id === testItemId
})
} 





const updateTestItem = async()=>{
    try{
      
        await updateDoc(doc(db,"testItem", testItemId), {
            clientName:testItem.value.clientName,
            dueDate:testItem.value.dueDate,
            productML:testItem.value.productML,
            sampleQty:testItem.value.sampleQty,
            ingredientForm:testItem.value.ingredientForm,
            productPackage:testItem.value.productPackage,
            remark:testItem.value.remark,


        });
        router.push({name:'Sale'})

    }
    catch(e){
  console.error("Error adding document: ", e);

    }

}

const backPage =()=>{
    router.push({name:'Sale'})

}





</script>

<template>
    <div class="applyTestForm">
      <h5>修改安定性測試表單</h5>
      <hr>
      <p>Form ID#<span>{{testItem.formID}}</span></p>
      <form @submit.prevent="updateTestItem">
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
          <input type="button"  @click="backPage" value="取消返回">
          <input type="submit"  value="送出修改">
  
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
  
