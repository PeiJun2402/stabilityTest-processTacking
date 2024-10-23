<script setup>
import { useTestitemStore } from '@/pinia/testItem.js';
import { db } from '@/firestore/firestoreInit.js';
import { doc, updateDoc } from "firebase/firestore"; 
import { defineProps,onMounted,ref } from 'vue';

const TestitemStore = useTestitemStore();


const props =defineProps({
    id: {
        required: true,
    }

})

const testItem = TestitemStore.testItems.find((testItem)=>{
        return testItem.id === props.id
})

const SaleCheckState =ref(testItem)


const changeClientConfirmData = async()=>{
    try{
        await updateDoc(doc(db,"testItem", props.id),{
            saleCheck:{
                clientConfirm: !SaleCheckState.value.saleCheck.clientConfirm,
                confirmMfr:SaleCheckState.value.saleCheck.confirmMfr

            }


    })

    } catch(e){
        console.error("Error adding document: ", e);

    }


}
const changeConfirmMfrData = async()=>{
    try{
        await updateDoc(doc(db,"testItem", props.id),{
            saleCheck:{
                clientConfirm: SaleCheckState.value.saleCheck.clientConfirm,
                confirmMfr:!SaleCheckState.value.saleCheck.confirmMfr

            }
        
    })
    location.reload();

    } catch(e){
        console.error("Error adding document: ", e);

    }


}



</script>

<template>
    <div class="saleEdit">
        <form >
            <div class="confirmClient">
                <input type="checkbox"  v-model="SaleCheckState.saleCheck.clientConfirm" @click="changeClientConfirmData" value="confirmClient">
                <label for="vehicle1"> 通知客戶-完成測試</label><br>
            </div>
            <div class="goToProduce">
                <input type="checkbox"  v-model="SaleCheckState.saleCheck.confirmMfr"  @click="changeConfirmMfrData" value="goToProduce">
                <label for="vehicle1"> 客戶確認-進行生產排程</label><br>
            </div>
        </form>

    </div>


</template>

<style lang="scss" scoped>

.saleEdit{
    width: 100%;
    height: 100%;
    @include layout(column ,center,center);

    label{
        font-family: "Noto Sans TC", sans-serif;
        font-weight: 700;

        color: $black80;
        letter-spacing: 0.2rem;
    }

    .confirmClient{
        padding-bottom: 1rem;
    }

}

</style>