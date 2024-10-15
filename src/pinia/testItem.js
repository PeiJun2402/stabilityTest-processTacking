import { defineStore } from 'pinia';
import { ref,computed } from 'vue';
import { db } from '@/firestore/firestoreInit.js';
import { collection, getDocs } from "firebase/firestore"; 

export const useTestitemStore = defineStore('testItem', () => {

  let testItems = ref([]);
  const collectRef= collection(db,"testItem");


//------------------- action ------------------------------
//getData - firestore

const getData = async()=>{
  try{
    const allDatas = await getDocs(collectRef)
    const data = allDatas.docs.map((doc)=>{
      return {
        ...doc.data(),
        id:doc.id

      }
      
    })
    testItems.value.push(...data)


  }
  catch(e){
    console.error("Error adding document: ", e);

}

}




  //----------------- computed ----------------------------
  //border color
  const borderStyle = computed(()=>{


    testItems.value.forEach((testItem) => {

      if(testItem.testStage !== "未執行"){
        testItem.borderColor="#FF9A84"
  
      }
      
    });
    

  })

 
    
    return { 
      testItems,
      collectRef,
      borderStyle,
      getData,



     }
})