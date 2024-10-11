<script setup>
import saleEdit from '@/components/saleEdit.vue'


</script>

<template>
    <div class="testProject">
        <div class="displayItem">
            <div class="button">
                <button class="editBtn"><font-awesome-icon icon="fa-solid fa-pen-to-square" /></button>
                <button class="deleteBtn"><font-awesome-icon icon="fa-solid fa-trash" /></button>
            </div>
            <div class="displayInfo">
                <div class="clientName">
                    <p>客戶名稱</p>
                    <h3>miily</h3>
                </div>
                <div class="dueDate">
                    <p>預計生產日期</p>
                    <h3>2024/11/06</h3>
                </div>
                <div class="testStage">
                    <p>檢測階段</p>
                    <h3>Test1</h3>
                </div>
            </div>
        </div>
        <div class="departmentFunction">
            <saleEdit/>
        </div>
    </div>
  

</template>

<style lang="scss" scoped>
.testProject{
    padding: 1rem;
    margin-top: 2rem;
    border: $pointColor 2px solid;
    border-radius: 2rem;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 1rem;

    



    .displayItem{
        // background-color: bisque;
        grid-column: 1 / 5;
        display: flex;

        border-right: $gray50 1px solid;
   

        .button{
            flex: 0.5;
            
            

            button{
                display: block;
                margin: 1rem 0.5rem;
                padding: .5rem;
                font-size: 1rem;

                color: $gray20;
                background-color: transparent;
                border: none;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.5s ease;

               
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