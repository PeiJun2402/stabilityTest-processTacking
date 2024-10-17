<script setup>
import { useTestitemStore } from '@/pinia/testItem.js'
import { ref } from 'vue';

const TestitemStore = useTestitemStore();

const changeColor =ref(false)


</script>

<template>
    <div  :class="{ red:changeColor }" class="testStageRecord-section ">
        <div class="displayInfo">
                <div class="clientName">
                    <p>客戶名稱</p>
                    <h3>mfirme</h3>
                </div>
                <div class="dueDate">
                    <p>預計生產日期</p>
                    <h3>2024/05/06</h3>
                </div>
                <div class="testStage">
                    <p>檢測階段</p>
                    <h3>tew6</h3>
                </div>
         </div>
         <hr>
         <div class="testStageinfo">
            <div class="test1 testDIV">
                <h5>TEST1 - 瓶器測漏</h5>
                <div class="testRecord">
                    <form class="test1Form testForm">
                        <div class="sampleQty">
                            <label for="sampleQty">檢測數量</label>
                            <input type="text" id="sampleQty" value="25">
                        </div>
                        <div class="productPackage">
                            <label for="productPackage">產品包材材質</label>
                            <input type="text" id="productPackage" value="75">
                        </div>
                        <div class="test1Result">
                            <label for="test1Result">結果</label>
                            <input type="text" id="test1Result" value="15">
                        </div>
                        
                    </form>
                    <button type="submit" class="test1Pass">unfinished</button>
                </div>
            </div>
            <div class="test2 testDIV">
                <h5>TEST2 - 高低溫測試循環</h5>
                <div class="testRecord">
                    <form class="test2Form testForm">
                        <div class="left">
                            <div class="firstTemRecord">
                                <label for="firstTemRecord">第1次循環溫度</label>
                                <input type="text" id="firstTemRecord" value="25c">
                            </div>
                            <div class="secondTemRecord">
                                <label for="secondTemRecord">第2次循環溫度</label>
                                <input type="text" id="secondTemRecord" value="27c">
                            </div>
                        </div>
                        <div class="right">           
                            <div class="thirdTemRecord">
                                <label for="thirdTemRecord">第3次循環溫度</label>
                                <input type="text" id="thirdTemRecord" value="30c">
                            </div>
                            <div class="fourthTemRecord">
                                <label for="fourthTemRecord">第4次循環溫度</label>
                                <input type="text" id="fourthTemRecord" value="45c">
                            </div>
                        </div>
                    </form>
                    <button type="submit" class="test2Pass">unfinished</button>
                </div>
            </div>
            <div class="test3 testDIV">
                <h5>TEST3 - 恆濕恆溫試驗</h5>
                <div class="testRecord">
                    <form class="test3Form testForm">
                        <label for="constantHUM&TEM">檢測紀錄</label>
                        <textarea id="constantHUM&TEM" >25c</textarea>
                    </form>
                    <button type="submit" class="test3Pass">unfinished</button>
                </div>
            </div>
            <div class="test4 testDIV">
                <h5>TEST4 - pH、驗菌測試</h5>
                <div class="testRecord">
                    <form class="test4Form testForm">
                        <div class="left">
                            <div class="test4Record">
                                <label for="test4Record">觀測紀錄</label>
                                <textarea id="test4Record" >29c</textarea>
                            </div>
                        </div>
                        <div class="right">           
                            <div class="thirdTemRecord">
                                <label for="thirdTemRecord">驗菌結果</label>
                                <input type="checkbox" >
                                <label class="checkboxResult">未驗出大腸桿菌</label><br>
                                <input type="checkbox" >
                                <label class="checkboxResult">未驗出綠膿桿菌</label><br>
                                <input type="checkbox" >
                                <label class="checkboxResult">未驗出金黃色葡萄球菌</label><br>
                            </div>
                        </div>
                    </form>
                    <button type="submit" class="test4Pass">unfinished</button>
                </div>
            </div>
            <div class="test5 testDIV">
                <h5>TEST5 - 離心測試 <span>( 乳化劑型專屬 )</span></h5>
                <div class="testRecord">
                    <form class="test5Form testForm">
                                <label for="thirdTemRecord">測試結果</label>
                                <div class="firstCheck">
                                    <input type="checkbox" >
                                    <label class="checkboxResult">確認乳化完全</label><br>
                                </div>
                                <div class="secondCheck">
                                    <input type="checkbox" >
                                    <label class="checkboxResult">無油水分離現象</label><br>
                                </div>
                    </form>
                    <button type="submit" class="test5Pass">unfinished</button>
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
            .testStage h3{
                color: $pointColor;

            }
        }

    .testStageinfo{
        margin-top: 2rem;
        .testDIV{
            width: 100%;
            padding: 1rem 0;
            // background-color: aqua;

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
                   
                   

                    @include buttonbStyle($primaryColor 2px solid,transparent,$primaryColor);

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
                   
                    @include buttonbStyle($primaryColor 2px solid,transparent,$primaryColor);

                    font-size: 1.2rem;
                    font-weight: 700;


                }

                //TEST3
                .test3Form{
                    padding-bottom: 4rem ;
                    // background-color: aqua;

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
                   
                    @include buttonbStyle($primaryColor 2px solid,transparent,$primaryColor);

                    font-size: 1.2rem;
                    font-weight: 700;


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
                   
                    @include buttonbStyle($primaryColor 2px solid,transparent,$primaryColor);

                    font-size: 1.2rem;
                    font-weight: 700;


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

                   
                    @include buttonbStyle($primaryColor 2px solid,transparent,$primaryColor);

                    font-size: 1.2rem;
                    font-weight: 700;


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
