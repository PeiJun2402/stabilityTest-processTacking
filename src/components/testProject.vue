<script setup>
import saleEdit from '@/components/saleEdit.vue'
import devEdit from '@/components/devEdit.vue'
import mfrEdit from '@/components/mfrEdit.vue'
import { RouterLink,useRoute } from 'vue-router';
import { ref,computed, watch, onMounted,defineProps } from 'vue';
import { useTestitemStore } from '@/pinia/testItem.js'
import { db } from '@/firestore/firestoreInit.js';
import { doc,deleteDoc } from "firebase/firestore"; 


const TestitemStore = useTestitemStore();
TestitemStore.borderStyle  //pinia getter


const props = defineProps({
    clientName: {
        required: true,
        default: '未輸入客戶名稱'
    },
    dueDate: {
        required: true,
        default: '未輸入日期'
    },
    testStage: {
        required: true,
        default: '未執行'
    },
    borderColor: {
        required: true,
        default: '#58A9C3'
    },
    id: {
        required: true,
    },
    confirmMfr: {
        required: true,
    },
    development: {
        required: true,
    },
})



const route =useRoute();
const rightColumnEdit = ref({
    saleEdit:false,
    devEdit:false,
    mfrEdit:false,

})
const leftColumnButton = ref({
    saleButton:false,
    devButton:false,

})

const departmentURL = ref(route.path);


onMounted(()=>{
    if(departmentURL.value === "/sale"){

        if(props.development === true){
            rightColumnEdit.value.saleEdit = true
            rightColumnEdit.value.devEdit = false
            rightColumnEdit.value.mfrEdit = false

        }else{
            rightColumnEdit.value.saleEdit = false
            rightColumnEdit.value.devEdit = false
            rightColumnEdit.value.mfrEdit = false

        }
       

        leftColumnButton.value.saleButton = true
        leftColumnButton.value.devButton = false

    }
    else if (departmentURL.value  === "/development") {

        if(props.testStage !== "未執行"){
            rightColumnEdit.value.saleEdit = false
            rightColumnEdit.value.devEdit = true
            rightColumnEdit.value.mfrEdit = false
        }else{
            rightColumnEdit.value.saleEdit = false
            rightColumnEdit.value.devEdit = false
            rightColumnEdit.value.mfrEdit = false

        }
        leftColumnButton.value.saleButton = false
        leftColumnButton.value.devButton = true
        
    }
    else if (departmentURL.value  === "/manufacture") {
        rightColumnEdit.value.saleEdit = false
        rightColumnEdit.value.devEdit = false
        rightColumnEdit.value.mfrEdit = true

        leftColumnButton.value.saleButton = false
        leftColumnButton.value.devButton = false
        
    }

})





const deleteTestItem = async()=>{
    try{
        await deleteDoc(doc(db,"testItem",props.id))
        window.location.href = '/stabilityTest-processTacking'
    }
    catch(e){
    console.error("Error adding document: ", e);

}
   
}



</script>

<template>
    <div class="testProject":style="{ border: borderColor + ' 2px solid' }" >
        <div class="displayItem">
            <div class="button" >
                <RouterLink :to="`/editForm/${id}`" v-if="leftColumnButton.saleButton">
                    <button class="editBtn" ><font-awesome-icon icon="fa-solid fa-pen-to-square" /></button>
                </RouterLink>

                    <button class="deleteBtn" @click="deleteTestItem" v-if="leftColumnButton.saleButton"><font-awesome-icon icon="fa-solid fa-trash" /></button>

                <RouterLink :to="`/testStageRecord/${id}`"  v-if="leftColumnButton.devButton">
                    <button class="testRecordBtn" @click="testRecord"><font-awesome-icon icon="fa-solid fa-clipboard" /></button>
                </RouterLink>
         
            </div>
            <div class="displayInfo">
                <div class="clientName">
                    <p>客戶名稱</p>
                    <h3>{{ clientName }}</h3>
                </div>
                <div class="dueDate">
                    <p>預計生產日期</p>
                    <h3>{{ dueDate }}</h3>
                </div>
                <div class="testStage">
                    <p>檢測階段</p>
                    <h3>{{ testStage }}</h3>
                </div>
            </div>
        </div>
        <div class="departmentFunction">
            <saleEdit 
            v-if="rightColumnEdit.saleEdit"
            :id="props.id" />
            <devEdit 
            v-if="rightColumnEdit.devEdit"
            :id="props.id"
            :testStage="props.testStage" />
            <mfrEdit 
            v-if="rightColumnEdit.mfrEdit"
            :id="props.id" />
        </div>
    </div>
    <!-- :style="TestitemStore.borderStyle" -->

</template>

<style lang="scss" scoped>
.testProject{
    padding: 1rem;
    margin-top: 2rem;
    // border: $pointColor 2px solid;
    border-radius: 2rem;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 1rem;

    



    .displayItem{
        // background-color: bisque;
        padding: 1rem 0;
        grid-column: 1 / 5;
        display: flex;

        border-right: $gray50 1px solid;
   

        .button{
            flex: 0.5;
            // background-color: bisque;

             button{

                display: block;
                margin: 1rem 0.5rem;
                margin-top: 1.5rem;
                font-size: 1rem;

                color: $gray20;
                background-color: transparent;
                border: none;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.5s ease;

            }

            .testRecordBtn{
                margin-top: 2.7rem;

            }
           
            
            

        }

        .displayInfo{
            flex: 8;
            @include layout(row,space-around,center);
            text-align: center;

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

    }
    .departmentFunction{
        // background-color: aquamarine;
        grid-column: 5 / 7;
    }

    &:hover .button button {
        opacity: 1; 
    }

}



</style>