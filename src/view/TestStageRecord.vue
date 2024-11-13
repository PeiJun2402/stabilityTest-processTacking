<script setup>
import { useTestitemStore } from '@/pinia/testItem.js';
import { db } from '@/firestore/firestoreInit.js';
import { doc, updateDoc } from "firebase/firestore"; 
import { useRoute } from 'vue-router';
import { ref, onMounted, computed, watch } from 'vue';

const route =useRoute();
const testItemId = route.params.id;
const TestitemStore = useTestitemStore();

const testStageRecord =ref({
    clientName:null,
    dueDate:null,
    sampleQty:null,
    productPackage:null,
    testStage:null,
    test1Result:null,
    test2Result:{
        firstTemRecord:null, 
        secondTemRecord:null, 
        thirdTemRecord:null, 
        fourthTemRecord:null
    },
    test3Result:null,
    test4Result:{
      test4Record:null,
      bacteria1:null,
      bacteria2:null,
      bacteria3:null,

    },
    test5Result:{
      emulsification:false,
      oilWaterSeparation:false

    },
    testPassed:{
      test1Passed:null,
      test2Passed:null,
      test3Passed:null,
      test4Passed:null,
      test5Passed:null,
    },
    testcheck:{
      test2check:null,
      test3check:null,
      test4check:null,
      test5check:null,

    },
    testPassButton:{
      test1PassButton:null,
      test2PassButton:null,
      test3PassButton:null,
      test4PassButton:null,
      test5PassButton:null,
      changeColor:null
    }


})

onMounted( async()=>{
  TestitemStore.testItems = []
  try {
    await TestitemStore.getData();
    findFunction();
   
  } 
  catch (error) {
    console.error('Error loading data:', error);
  } 

})


const findFunction=()=>{
    testStageRecord.value = TestitemStore.testItems.find((testItem)=>{
    return testItem.id === testItemId
})
}
    




const updateTest1Record = async()=>{
    testStageRecord.value.testPassButton.changeColor = !testStageRecord.value.testPassButton.changeColor;
    testStageRecord.value.testPassed.test1Passed = !testStageRecord.value.testPassed.test1Passed;
    testStageRecord.value.testcheck.test2check = !testStageRecord.value.testcheck.test2check;
    testStageRecord.value.testPassButton.test1PassButton = !testStageRecord.value.testPassButton.test1PassButton;


    // if(testStageRecord.value.testStage === "未執行"){
    //     testStageRecord.value.testStage = "Test1"

    // }else{
    //     testStageRecord.value.testStage = "未執行"

    // }

    

    try{
      
        await updateDoc(doc(db,"testItem", testItemId), {
            // sampleQty:testStageRecord.value.sampleQty,
            // productPackage:testStageRecord.value.productPackage,
            // testStage:testStageRecord.value.testStage,
            test1Result:testStageRecord.value.test1Result,
            testPassed:{
            test1Passed:testStageRecord.value.testPassed.test1Passed,
            test2Passed:testStageRecord.value.testPassed.test2Passed,
            test3Passed:testStageRecord.value.testPassed.test3Passed,
            test4Passed:testStageRecord.value.testPassed.test4Passed,
            test5Passed:testStageRecord.value.testPassed.test5Passed,
            },
            testcheck:{
            test2check:testStageRecord.value.testcheck.test2check,
            test3check:testStageRecord.value.testcheck.test3check,
            test4check:testStageRecord.value.testcheck.test4check,
            test5check:testStageRecord.value.testcheck.test5check,

            },
            testPassButton:{
            test1PassButton:testStageRecord.value.testPassButton.test1PassButton,
            test2PassButton:testStageRecord.value.testPassButton.test2PassButton,
            test3PassButton:testStageRecord.value.testPassButton.test3PassButton,
            test4PassButton:testStageRecord.value.testPassButton.test4PassButton,
            test5PassButton:testStageRecord.value.testPassButton.test5PassButton,
            changeColor:testStageRecord.value.testPassButton.changeColor
            }

        });

    }
    catch(e){
  console.error("Error adding document: ", e);

    }
}
const updateTest2Record = async()=>{

    testStageRecord.value.testPassed.test2Passed = !testStageRecord.value.testPassed.test2Passed;
    testStageRecord.value.testcheck.test3check = !testStageRecord.value.testcheck.test3check;
    testStageRecord.value.testPassButton.test2PassButton = !testStageRecord.value.testPassButton.test2PassButton;


    // if(testStageRecord.value.testPassButton.test1PassButton === true &&
    // testStageRecord.value.testPassButton.test2PassButton === true
    // ){
    //     testStageRecord.value.testStage = "Test2"

    // }
    // else{
    //     testStageRecord.value.testStage = "Test1"

    // }

    

    try{
      
        await updateDoc(doc(db,"testItem", testItemId), {
           
            // testStage:testStageRecord.value.testStage,
            test2Result:{
                firstTemRecord:testStageRecord.value.test2Result.firstTemRecord, 
                secondTemRecord:testStageRecord.value.test2Result.secondTemRecord, 
                thirdTemRecord:testStageRecord.value.test2Result.thirdTemRecord, 
                fourthTemRecord:testStageRecord.value.test2Result.fourthTemRecord
            }, 
            testPassed:{
            test1Passed:testStageRecord.value.testPassed.test1Passed,
            test2Passed:testStageRecord.value.testPassed.test2Passed,
            test3Passed:testStageRecord.value.testPassed.test3Passed,
            test4Passed:testStageRecord.value.testPassed.test4Passed,
            test5Passed:testStageRecord.value.testPassed.test5Passed,
            },
            testcheck:{
            test2check:testStageRecord.value.testcheck.test2check,
            test3check:testStageRecord.value.testcheck.test3check,
            test4check:testStageRecord.value.testcheck.test4check,
            test5check:testStageRecord.value.testcheck.test5check,

            },
            testPassButton:{
            test1PassButton:testStageRecord.value.testPassButton.test1PassButton,
            test2PassButton:testStageRecord.value.testPassButton.test2PassButton,
            test3PassButton:testStageRecord.value.testPassButton.test3PassButton,
            test4PassButton:testStageRecord.value.testPassButton.test4PassButton,
            test5PassButton:testStageRecord.value.testPassButton.test5PassButton,
            changeColor:testStageRecord.value.testPassButton.changeColor
            }



        });


    }
    catch(e){
  console.error("Error adding document: ", e);

    }
}
const updateTest3Record = async()=>{

    testStageRecord.value.testPassed.test3Passed = !testStageRecord.value.testPassed.test3Passed;
    testStageRecord.value.testcheck.test4check = !testStageRecord.value.testcheck.test4check;
    testStageRecord.value.testPassButton.test3PassButton = !testStageRecord.value.testPassButton.test3PassButton;

    // if(testStageRecord.value.testPassButton.test2PassButton === true){
    //     testStageRecord.value.testStage = "Test3"

    // }else{
    //     testStageRecord.value.testStage = "Test2"

    // }

    

    try{
      
        await updateDoc(doc(db,"testItem", testItemId), {
           
            // testStage:testStageRecord.value.testStage,
            test3Result:testStageRecord.value.test3Result,
            testPassed:{
            test1Passed:testStageRecord.value.testPassed.test1Passed,
            test2Passed:testStageRecord.value.testPassed.test2Passed,
            test3Passed:testStageRecord.value.testPassed.test3Passed,
            test4Passed:testStageRecord.value.testPassed.test4Passed,
            test5Passed:testStageRecord.value.testPassed.test5Passed,
            },
            testcheck:{
            test2check:testStageRecord.value.testcheck.test2check,
            test3check:testStageRecord.value.testcheck.test3check,
            test4check:testStageRecord.value.testcheck.test4check,
            test5check:testStageRecord.value.testcheck.test5check,

            },
            testPassButton:{
            test1PassButton:testStageRecord.value.testPassButton.test1PassButton,
            test2PassButton:testStageRecord.value.testPassButton.test2PassButton,
            test3PassButton:testStageRecord.value.testPassButton.test3PassButton,
            test4PassButton:testStageRecord.value.testPassButton.test4PassButton,
            test5PassButton:testStageRecord.value.testPassButton.test5PassButton,
            changeColor:testStageRecord.value.testPassButton.changeColor
            }



        });

    }
    catch(e){
  console.error("Error adding document: ", e);

    }
}
const updateTest4Record = async()=>{

    testStageRecord.value.testPassed.test4Passed = !testStageRecord.value.testPassed.test4Passed;
    testStageRecord.value.testcheck.test5check = !testStageRecord.value.testcheck.test5check;
    testStageRecord.value.testPassButton.test4PassButton = !testStageRecord.value.testPassButton.test4PassButton;

    // if(testStageRecord.value.testPassButton.test3PassButton === true){
    //     testStageRecord.value.testStage = "Test4"

    // }else{
    //     testStageRecord.value.testStage = "Test3"

    // }


    

    try{
      
        await updateDoc(doc(db,"testItem", testItemId), {
           
            // testStage:testStageRecord.value.testStage,
            test4Result:{
            test4Record:testStageRecord.value.test4Result.test4Record,
            bacteria1:testStageRecord.value.test4Result.bacteria1,
            bacteria2:testStageRecord.value.test4Result.bacteria2,
            bacteria3:testStageRecord.value.test4Result.bacteria3,

            },
            testPassed:{
            test1Passed:testStageRecord.value.testPassed.test1Passed,
            test2Passed:testStageRecord.value.testPassed.test2Passed,
            test3Passed:testStageRecord.value.testPassed.test3Passed,
            test4Passed:testStageRecord.value.testPassed.test4Passed,
            test5Passed:testStageRecord.value.testPassed.test5Passed,
            },
            testcheck:{
            test2check:testStageRecord.value.testcheck.test2check,
            test3check:testStageRecord.value.testcheck.test3check,
            test4check:testStageRecord.value.testcheck.test4check,
            test5check:testStageRecord.value.testcheck.test5check,

            },
            testPassButton:{
            test1PassButton:testStageRecord.value.testPassButton.test1PassButton,
            test2PassButton:testStageRecord.value.testPassButton.test2PassButton,
            test3PassButton:testStageRecord.value.testPassButton.test3PassButton,
            test4PassButton:testStageRecord.value.testPassButton.test4PassButton,
            test5PassButton:testStageRecord.value.testPassButton.test5PassButton,
            changeColor:testStageRecord.value.testPassButton.changeColor
            }



        });

    }
    catch(e){
  console.error("Error adding document: ", e);

    }
}
const updateTest5Record = async()=>{

    testStageRecord.value.testPassed.test5Passed = !testStageRecord.value.testPassed.test5Passed;
    testStageRecord.value.testPassButton.test5PassButton = !testStageRecord.value.testPassButton.test5PassButton;


    // if(testStageRecord.value.testPassButton.test4PassButton === true){
    //     testStageRecord.value.testStage = "Finished"

    // }else{
    //     testStageRecord.value.testStage = "Test4"

    // }
    


    try{
      
        await updateDoc(doc(db,"testItem", testItemId), {
           
            // testStage:testStageRecord.value.testStage,
            test5Result:{
            emulsification:testStageRecord.value.test5Result.emulsification,
            oilWaterSeparation:testStageRecord.value.test5Result.oilWaterSeparation

            },
            testPassed:{
            test1Passed:testStageRecord.value.testPassed.test1Passed,
            test2Passed:testStageRecord.value.testPassed.test2Passed,
            test3Passed:testStageRecord.value.testPassed.test3Passed,
            test4Passed:testStageRecord.value.testPassed.test4Passed,
            test5Passed:testStageRecord.value.testPassed.test5Passed,
            },
            testcheck:{
            test2check:testStageRecord.value.testcheck.test2check,
            test3check:testStageRecord.value.testcheck.test3check,
            test4check:testStageRecord.value.testcheck.test4check,
            test5check:testStageRecord.value.testcheck.test5check,

            },
            testPassButton:{
            test1PassButton:testStageRecord.value.testPassButton.test1PassButton,
            test2PassButton:testStageRecord.value.testPassButton.test2PassButton,
            test3PassButton:testStageRecord.value.testPassButton.test3PassButton,
            test4PassButton:testStageRecord.value.testPassButton.test4PassButton,
            test5PassButton:testStageRecord.value.testPassButton.test5PassButton,
            changeColor:testStageRecord.value.testPassButton.changeColor
            }



        });

    }
    catch(e){
  console.error("Error adding document: ", e);

    }
}


// watch test pass button state
watch(() => [
    testStageRecord.value.testPassButton.test1PassButton,
    testStageRecord.value.testPassButton.test2PassButton,
    testStageRecord.value.testPassButton.test3PassButton,
    testStageRecord.value.testPassButton.test4PassButton,
    testStageRecord.value.testPassButton.test5PassButton
  ], 
  async (newValues) => {
    const [button1, button2, button3, button4, button5] = newValues;
    if (button1 === true && button2 === true && button3 === true && button4 === true && button5 === true) {
      testStageRecord.value.testStage = "Finished";
    }
    if (button1 === false && button2 ===false && button3 === false && button4 === false && button5 === false ) {
      testStageRecord.value.testStage = "未執行";
    }
    if (button1 === true && button2 ===false && button3 === false && button4 === false && button5 === false || button1 === false && button2 === true && button3 === true && button4 === true && button5 === true) {
      testStageRecord.value.testStage = "Test1";
    }
    if (button1 === true && button2 ===true && button3 === false && button4 === false && button5 === false || button1 === true && button2 === false && button3 === true && button4 === true && button5 === true) {
      testStageRecord.value.testStage = "Test2";
    }
    if (button1 === true && button2 ===true && button3 === true && button4 === false && button5 === false || button1 === true && button2 === true && button3 === false && button4 === true && button5 === true) {
      testStageRecord.value.testStage = "Test3";
    }
    if (button1 === true && button2 ===true && button3 === true && button4 === true && button5 === false || button1 === true && button2 === true && button3 === true && button4 === false && button5 === true) {
      testStageRecord.value.testStage = "Test4";
    }

    try{
        await updateDoc(doc(db,"testItem", testItemId), {
        testStage:testStageRecord.value.testStage,

    })  
    }
    catch (error) {
      console.error("Error updating document: ", error);
    }

    
  })


</script>

<template>
    <div  :class="{ red:testStageRecord.testPassButton.changeColor }" class="testStageRecord-section ">
        <div class="displayInfo">
                <div class="clientName">
                    <p>客戶名稱</p>
                    <h3>{{ testStageRecord.clientName }}</h3>
                </div>
                <div class="dueDate">
                    <p>預計生產日期</p>
                    <h3>{{ testStageRecord.dueDate }}</h3>
                </div>
                <div class="testStage">
                    <p>檢測階段</p>
                    <h3 :class="{ red:testStageRecord.testPassButton.changeColor }" class="blue">{{ testStageRecord.testStage }}</h3>
                </div>
         </div>
         <hr>
         <div class="testStageinfo">
            <div :class="{ test:testStageRecord.testPassButton.test1PassButton }" class="testDIV">
                <h5>TEST1 - 瓶器測漏</h5>
                <div class="testRecord">
                    <form class="test1Form testForm" >
                        <div class="sampleQty">
                            <label for="sampleQty">檢測數量</label>
                            <input type="text" id="sampleQty"  v-model="testStageRecord.sampleQty" readonly>
                        </div>
                        <div class="productPackage">
                            <label for="productPackage">產品包材材質</label>
                            <input type="text" id="productPackage"  v-model="testStageRecord.productPackage" readonly>
                        </div>
                        <div class="test1Result">
                            <label for="test1Result">結果</label>
                            <input type="text" id="test1Result"  v-model="testStageRecord.test1Result" :readonly="testStageRecord.testPassButton.test1PassButton">
                        </div>
                        
                    </form>
                    <button type="submit" :class="{ testPassed:testStageRecord.testPassed.test1Passed }" class="test1Pass unTestPassed" @click="updateTest1Record">{{  testStageRecord.testPassButton.test1PassButton?"Finished":"Unfinished" }}</button>
                </div>
            </div>
            <div  :class="{ test: testStageRecord.testPassButton.test2PassButton }" class="testDIV">
                <h5>TEST2 - 高低溫測試循環</h5>
                <div class="testRecord">
                    <form class="test2Form testForm">
                        <div class="left">
                            <div class="firstTemRecord">
                                <label for="firstTemRecord">第1次循環溫度</label>
                                <input type="text" id="firstTemRecord" v-model="testStageRecord.test2Result.firstTemRecord" :readonly="testStageRecord.testPassButton.test2PassButton">
                            </div>
                            <div class="secondTemRecord">
                                <label for="secondTemRecord">第2次循環溫度</label>
                                <input type="text" id="secondTemRecord" v-model="testStageRecord.test2Result.secondTemRecord" :readonly="testStageRecord.testPassButton.test2PassButton">
                            </div>
                        </div>
                        <div class="right">           
                            <div class="thirdTemRecord">
                                <label for="thirdTemRecord">第3次循環溫度</label>
                                <input type="text" id="thirdTemRecord" v-model="testStageRecord.test2Result.thirdTemRecord" :readonly="testStageRecord.testPassButton.test2PassButton">
                            </div>
                            <div class="fourthTemRecord">
                                <label for="fourthTemRecord">第4次循環溫度</label>
                                <input type="text" id="fourthTemRecord" v-model="testStageRecord.test2Result.fourthTemRecord" :readonly="testStageRecord.testPassButton.test2PassButton">
                            </div>
                        </div>
                    </form>
                    <button type="submit" :class="{ testPassed:testStageRecord.testPassed.test2Passed, test2PassHidden:testStageRecord.testcheck.test2check }" class="test2Pass unTestPassed" @click="updateTest2Record">{{  testStageRecord.testPassButton.test2PassButton?"Finished":"Unfinished" }}</button>
                </div>
            </div>
            <div  :class="{ test:testStageRecord.testPassButton.test3PassButton }" class="testDIV">
                <h5>TEST3 - 恆濕恆溫試驗</h5>
                <div class="testRecord">
                    <form class="test3Form testForm">
                        <label for="constantHUM&TEM">檢測紀錄</label>
                        <textarea id="constantHUM&TEM" v-model="testStageRecord.test3Result" :readonly="testStageRecord.testPassButton.test3PassButton">25c</textarea>
                    </form>
                    <button type="submit" :class="{ testPassed:testStageRecord.testPassed.test3Passed, test3PassHidden:testStageRecord.testcheck.test3check }" class="test3Pass  unTestPassed" @click="updateTest3Record">{{  testStageRecord.testPassButton.test3PassButton?"Finished":"Unfinished" }}</button>
                </div>
            </div>
            <div  :class="{ test:testStageRecord.testPassButton.test4PassButton }" class="testDIV">
                <h5>TEST4 - pH、驗菌測試</h5>
                <div class="testRecord">
                    <form class="test4Form testForm">
                        <div class="left">
                            <div class="test4Record">
                                <label for="test4Record">觀測紀錄</label>
                                <textarea id="test4Record" v-model="testStageRecord.test4Result.test4Record" :readonly="testStageRecord.testPassButton.test4PassButton">29c</textarea>
                            </div>
                        </div>
                        <div class="right">           
                            <div class="fourthTemRecord">
                                <label for="fourthRecord">驗菌結果</label>
                                <input type="checkbox" v-model="testStageRecord.test4Result.bacteria1" :disabled="testStageRecord.testPassButton.test4PassButton">
                                <label class="checkboxResult" >未驗出大腸桿菌</label><br>
                                <input type="checkbox" v-model="testStageRecord.test4Result.bacteria2" :disabled="testStageRecord.testPassButton.test4PassButton">
                                <label class="checkboxResult">未驗出綠膿桿菌</label><br>
                                <input type="checkbox" v-model="testStageRecord.test4Result.bacteria3" :disabled="testStageRecord.testPassButton.test4PassButton">
                                <label class="checkboxResult">未驗出金黃色葡萄球菌</label><br>
                            </div>
                        </div>
                    </form>
                    <button type="submit" :class="{ testPassed:testStageRecord.testPassed.test4Passed, test4PassHidden:testStageRecord.testcheck.test4check }" class="test4Pass unTestPassed"  @click="updateTest4Record">{{  testStageRecord.testPassButton.test4PassButton?"Finished":"Unfinished" }}</button>
                </div>
            </div>
            <div  :class="{ test:testStageRecord.testPassButton.test5PassButton }" class="testDIV">
                <h5>TEST5 - 離心測試 <span>( 乳化劑型專屬 )</span></h5>
                <div class="testRecord">
                    <form class="test5Form testForm">
                                <label for="thirdTemRecord">測試結果</label>
                                <div class="firstCheck">
                                    <input type="checkbox" v-model="testStageRecord.test5Result.emulsification" :disabled="testStageRecord.testPassButton.test5PassButton">
                                    <label class="checkboxResult">確認乳化完全</label><br>
                                </div>
                                <div class="secondCheck">
                                    <input type="checkbox"  v-model="testStageRecord.test5Result.oilWaterSeparation" :disabled="testStageRecord.testPassButton.test5PassButton">
                                    <label class="checkboxResult">無油水分離現象</label><br>
                                </div>
                    </form>
                    <button type="submit" :class="{ testPassed:testStageRecord.testPassed.test5Passed, test5PassHidden:testStageRecord.testcheck.test5check }" class="test5Pass unTestPassed"  @click="updateTest5Record">{{  testStageRecord.testPassButton.test5PassButton?"Finished":"Unfinished" }}</button>
                </div>
            </div>
         </div>

    </div>


</template>

<style lang="scss" scoped>
.testStageRecord-section{

    padding: 1rem 2rem;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        top: 5%;
        left: -1%;
        width: 12px;
        height: 12px;
        background-color: $primary1;
        border-radius: 1rem;
        box-shadow: 0 23px 0 0  $primary1, 0 45px 0 0  $primary1;
    }


    .displayInfo{
            flex: 8;
            @include layout(row,space-around,center);
            text-align: center;
            margin-bottom: 1.5rem;

            p{
                font-size: 0.8rem;
                letter-spacing: 0.5rem;
                font-weight: 700;

                color: $black60;
            }
            h3{
                margin: 1rem 0;
                font-size: 2.2rem;
            }



            .clientName h3,
            .dueDate h3{
                color: $primaryColor;

            }
            .blue{
                color: $primaryColor;

            }

            .red{
                color: $pointColor;

            }

        }

    .testStageinfo{
        margin-top: 2rem;

        .test{
            background-color: $gray10;
            border-radius: 1rem;
           
            h5{
                opacity: 0.5;
            }

            .testForm{
                opacity: 0.5;
            }




        }

        .testDIV{
            width: 100%;
            padding: 1rem 0;
            margin: 0.5rem 0;

            h5{
                font-size: 1.4rem;
                color: black; 
                letter-spacing: 0.2rem;

                span{
                        color: $gray40;
                        font-size: 0.9rem;
                        font-weight: 500;
                    }
                
            }

            .testRecord{
                margin: 1rem 0;

                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr;

                //----------- universal style---------------

                .testForm{
                    grid-column:1/3;

                    label{
                        display: block;
                        margin-bottom: 0.3rem;

                        font-size: 1rem;
                        font-weight: 700;
                        letter-spacing: 0.3rem;
                        color: $black80;
                    }

                }

                .unTestPassed{
                    @include buttonbStyle($primaryColor 2px solid,transparent,$primaryColor);

                }

                
                .testPassed{
                    @include buttonbStyle($pointColor 2px solid,$pointColor,white);

                }


                //----------- custom style---------------

                //TEST1

                .test1Form{
                    
                    @include layout(row,space-between,center);

                   
                    input{
                        width: 110%;
                        padding: 0.5rem 1rem;
                        border-radius: 0.5rem;
                        border: black 1px solid;
                    }

                }

                .test1Pass{
                    width: 60%;
                    margin: 0 auto;
                   
                    font-size: 1.2rem;
                    font-weight: 700;


                }



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

                .test2Pass{
                    width: 60%;
                    height: 50%;
                    margin: 0 auto;
                    margin-top: 2rem;

                    font-size: 1.2rem;
                    font-weight: 700;
                    visibility:visible;


                }

                .test2PassHidden{
                    visibility: hidden;

                }



                //TEST3
                .test3Form{
                    padding-bottom: 4rem ;

                    textarea{
                        width: 100%;
                        height: 120%;
                        padding: 0.5rem;
                       

                    }
                }

                .test3Pass{
                    width: 60%;
                    height: 45%;
                    margin: 0 auto;
                    margin-top: 2rem;

                    font-size: 1.2rem;
                    font-weight: 700;
                    visibility:visible;


                }

                .test3PassHidden{
                    visibility: hidden;

                }


                //TEST4
                .test4Form{
                    display: grid;
                    grid-template-columns: 1fr 1fr ;
                    grid-template-rows: 1fr;
                    grid-column-gap: 5rem;

                    .test4Record textarea{
                        padding: 0.5rem;
                        width: 100%;

                    }

                   
                    .checkboxResult{
                        display: inline;
                        margin-left: 0.5rem;
                       
                    }
                    
                }

                .test4Pass{
                    width: 60%;
                    height: 65%;
                    margin: 0 auto;
                    margin-top: 2rem;
                   
                    font-size: 1.2rem;
                    font-weight: 700;
                    visibility:visible;


                }

                .test4PassHidden{
                    visibility: hidden;

                }


                //TEST5
                .test5Form{
                    @include layout(row,space-between,center);
                    padding: 1rem;

                    .checkboxResult{
                        display: inline;
                        margin-left: 0.5rem;
                       
                    }

                }

                .test5Pass{
                    width: 60%;
                    margin: 0 auto;

                    font-size: 1.2rem;
                    font-weight: 700;
                    visibility:visible;


                }

                .test5PassHidden{
                    visibility: hidden;

                }

                


                


                



            }
        }

       
    }
}

.testStageRecord-section.red::before {
        background-color: $point1;
        box-shadow: 0 23px 0 0  $point1, 0 45px 0 0  $point1;
        
    }





</style>
