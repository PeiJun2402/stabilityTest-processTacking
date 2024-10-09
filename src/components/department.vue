<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <nav class="div80">
        <div class="navIntr">
            <h5>部門分類</h5>
            <p>Department classification</p>
        </div>

        <div class="navBar">
            <ul>
                <li>
                    <RouterLink to="/development">
                        <div class="title">
                            <h3 class="development">Development</h3>
                            <p>研發人員</p>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/sale">
                        <div class="title">
                            <h3>Sale</h3>
                            <p>業務人員</p>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/manufacture">
                        <div class="title">
                            <h3>Manufacture</h3>
                            <p>生產人員</p>
                        </div>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </nav>

</template>

<style lang="scss">
nav{
    padding: 2rem 0;
    // background-color: aqua;
    .navIntr{
        padding-bottom: 2rem;
        // background-color: bisque;
        h5{
            font-size: 0.8rem;
            letter-spacing: 0.7rem;
            font-weight: 500;
            
        }
        p{
            font-size: 0.7rem;
            letter-spacing: 0.1rem;
        }

    }

    .navBar ul{
        @include layout(row,space-around,center);

        li{
            position: relative; 

            .title{
                text-align: center;


                    h3{
                        font-size: 2rem;

                    }

                    p{
                        visibility: hidden;
                        opacity: 0;
                        letter-spacing: 0.7rem;
                        font-size: 0.9rem;
                        transition: opacity 0.5s ease, visibility 0s;
                        
                    }


                &:hover{
                    p{
                        visibility: visible;
                        opacity: 1;
                        
                    }
 
                }



    

        }

        
        }


    }

}



</style>
