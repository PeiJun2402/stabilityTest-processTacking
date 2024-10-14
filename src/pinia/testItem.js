import { defineStore } from 'pinia';
import { ref,computed } from 'vue';

export const useTestitemStore = defineStore('testItem', () => {

  const testItems = ref([])


  //----------------- computed ----------------------------
  //border color
  const borderStyle = computed(()=>{
    if(testItems.value.testStage !== "未執行"){
      testItems.value.borderColor="#FF9A84"

    }

})
    
    return { testItems }
})