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
    //client data
    formID:null,
    clientName:null,
    dueDate:null,
    productML:null,
    sampleQty:null,
    ingredientForm:null,
    productPackage:null,
    remark:null,

    //department data
    development:null,
    manufacture:null,
    mfrDate:null,
    saleCheck:{
      clientConfirm:null,
      confirmMfr:null
    },

    //test data
    test1Result:null,
    test2Result:{firstTemRecord:null, secondTemRecord:null, thirdTemRecord:null, fourthTemRecord:null},
    test3Result:null,
    test4Result:{
      test4Record:null,
      bacteria1:null,
      bacteria2:null,
      bacteria3:null,

    },
    test5Result:{
      emulsification:null,
      oilWaterSeparation:null

    },
    

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

const backToDev =async()=>{
    try{
      
      await updateDoc(doc(db,"testItem", testItemId), {
        development:false
      });
      router.push({name:'Sale'})

  }
  catch(e){
  console.error("Error adding document: ", e);

  }
    
}


const backToMfr =async()=>{
    try{
      
      await updateDoc(doc(db,"testItem", testItemId), {
        manufacture:false
      });
      router.push({name:'Sale'})

  }
  catch(e){
  console.error("Error adding document: ", e);

  }
    

}





</script>

<template>
    <div class="applyTestForm">
      <h5>安定性測試結果紀錄</h5>
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

        <div class="stabilityTestRecord">
            <div  class="testDIV">
                <h5>TEST1 - 瓶器測漏</h5>
                <div class="testRecord">
                    <form class="test1Form testForm" >
                        <label for="test1Result">結果:</label>
                        <p>{{ testItem.test1Result }}</p>
                    </form>
                </div>
            </div>
            <div class="testDIV">
                <h5>TEST2 - 高低溫測試循環</h5>
                <div class="testRecord">
                    <form class="test2Form testForm">
                        <div class="left">
                            <div class="firstTemRecord">
                                <label for="firstTemRecord">第1次循環溫度: </label>
                                <p>{{ testItem.test2Result.firstTemRecord }}</p>
                            </div>
                            <div class="secondTemRecord">
                                <label for="secondTemRecord">第2次循環溫度: </label>
                                <p>{{ testItem.test2Result.secondTemRecord }}</p>
                            </div>
                        </div>
                        <div class="right">           
                            <div class="thirdTemRecord">
                                <label for="thirdTemRecord">第3次循環溫度: </label>
                                <p>{{ testItem.test2Result.thirdTemRecord }}</p>
                            </div>
                            <div class="fourthTemRecord">
                                <label for="fourthTemRecord">第4次循環溫度: </label>
                                <p>{{ testItem.test2Result.fourthTemRecord }}</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div  class="testDIV">
                <h5>TEST3 - 恆濕恆溫試驗</h5>
                <div class="testRecord">
                    <form class="test3Form testForm">
                        <label for="constantHUM&TEM">檢測紀錄: </label>
                        <p>{{ testItem.test3Result }}</p>
                    </form>
                </div>
            </div>
            <div class="testDIV">
                <h5>TEST4 - pH、驗菌測試</h5>
                <div class="testRecord">
                    <form class="test4Form testForm">
                        <div class="left">
                            <div class="test4Record">
                                <label for="test4Record">觀測紀錄</label>
                                <p>{{ testItem.test4Result.test4Record }}</p>
                            </div>
                        </div>
                        <div class="right">           
                            <div class="fourthTemRecord">
                                <label for="fourthRecord">驗菌結果</label>
                                <input type="checkbox" v-model="testItem.test4Result.bacteria1" readonly>
                                <label class="checkboxResult" >未驗出大腸桿菌</label><br>
                                <input type="checkbox" v-model="testItem.test4Result.bacteria2" readonly>
                                <label class="checkboxResult">未驗出綠膿桿菌</label><br>
                                <input type="checkbox" v-model="testItem.test4Result.bacteria3" readonly>
                                <label class="checkboxResult">未驗出金黃色葡萄球菌</label><br>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div  class="testDIV">
                <h5>TEST5 - 離心測試 <span>( 乳化劑型專屬 )</span></h5>
                <div class="testRecord">
                    <form class="test5Form testForm">
                        <label for="thirdTemRecord" >測試結果</label>
                        <div class="firstCheck">
                            <input type="checkbox" v-model="testItem.test5Result.emulsification" readonly>
                            <label class="checkboxResult">確認乳化完全</label><br>
                        </div>
                        <div class="secondCheck">
                            <input type="checkbox"  v-model="testItem.test5Result.oilWaterSeparation" readonly>
                            <label class="checkboxResult">無油水分離現象</label><br>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  
        <div class="buttonSection">
          <input type="button"  @click="backPage" value="取消返回">
          <input type="submit"  value="送出修改">
          <input type="submit"  @click="backToDev" value="退回研發">
          <input type="submit"  @click="backToMfr" value="退回品管">
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

    .stabilityTestRecord{
        .testDIV{
            width: 100%;
            padding: 1rem 0;
            margin: 0.5rem 0;
            // background-color: aqua;

            h5{
                font-size: 1.4rem;
                font-weight: 700;
                color: black; 
                letter-spacing: 0.2rem;
                text-align: left;

                span{
                        color: $gray40;
                        font-size: 0.9rem;
                        font-weight: 500;
                    }
                
            }
            .testRecord{
                // margin: 1rem 0;
                   

                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr;

                //----------- universal style---------------

                .testForm{
                    grid-column:1/4;
                    // background-color: aqua;

                    label{
                        display: inline;
                        // margin-bottom: 0.3rem;

                        font-size: 1.2rem;
                        font-weight: 500;
                        letter-spacing: 0.3rem;
                        color: $black80;
                    }

                    p{
                        display: inline;
                        font-size: 1.2rem;
                        font-weight: 500;
                        letter-spacing: 0.3rem;
                        color: $black80;

                    }

                }

                 //----------- custom style---------------
                 //TEST2
                .test2Form{
                    display: grid;
                    grid-template-columns: 1fr 1fr ;
                    grid-template-rows: 1fr;

                    input{
                        width: 80%;
                        padding: 0.5rem 1rem;
                        border-radius: 0.5rem;
                        border: black 1px solid;
                    }

                }

                //TEST4
                .test4Form{
                    display: grid;
                    grid-template-columns: 1fr 1fr ;
                    grid-template-rows: 1fr;
                    grid-column-gap: 5rem;

                    label{
                        display: block;
                    }

                   
                    .checkboxResult{
                        display: inline;
                        margin-left: 0.5rem;
                       
                    }
                    
                }

                //TEST5
                 .test5Form{
                    grid-column:1/3;
                    @include layout(row,space-between,center);
                    padding: 1rem;
                    

                    .checkboxResult{
                        display: inline;
                        margin-left: 0.5rem;
                       
                    }

                }

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

      &:nth-of-type(1),
      &:nth-of-type(2){
        @include  buttonbStyle(none,$primaryColor,white)

      }
      &:nth-of-type(3),
      &:nth-of-type(4){
        @include  buttonbStyle(none,$pointColor,white)

      }

    



    }
  }
  }
  
  
  label{
    @include labelText;
  }
  
  
  </style>
  
