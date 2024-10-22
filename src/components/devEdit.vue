<script setup>
import { useTestitemStore } from '@/pinia/testItem.js';
import { db } from '@/firestore/firestoreInit.js';
import { doc, updateDoc } from "firebase/firestore"; 
import { defineProps,onMounted,ref } from 'vue';

const buttonStyle=ref(false);
const developmentState=ref("")
const TestitemStore = useTestitemStore();

const props =defineProps({
    testStage: {
        required: true,
    },
    id: {
        required: true,
    },

})


const changedevelopmentState= ()=>{
    developmentState.value= TestitemStore.testItems.find((testItem)=>{
        return testItem.id === props.id
    })
    developmentState.value.development = !developmentState.value.development

}

const buttonStyleChange= ()=>{
    if(props.testStage === "Finished"){
        buttonStyle.value = !buttonStyle.value

    }

}

const changeDevelopmentData = async() =>{
    changedevelopmentState();   

    await updateDoc(doc(db,"testItem", props.id), {
    development:true,
   });


}


onMounted(()=>{
    buttonStyleChange();

})


</script>

<template>
  <div class="devEdit">
    <button :class="{testPassed:buttonStyle}" class="unTestPassed" @click="changeDevelopmentData">Finished</button>

    </div>

</template>

<style lang="scss" scoped>

.devEdit{
    width: 100%;
    height: 100%;
    @include layout(column ,center,center);

    button{
        width: 70%;
        padding: 1rem 0 ;
        font-size: 1.2rem;
    }

    .unTestPassed{
        @include  buttonbStyle($pointColor 2px solid,transparent,$pointColor)

    }

    
    .testPassed{
        @include buttonbStyle($pointColor 2px solid,$pointColor,white);

    }

}

</style>
