<script setup>


</script>

<template>
      <div class="mfrEdit">
        <form >
            <div class="confirmClient">
                <p>排定上線日期</p>
            </div>
            <div class="goToProduce">
                <input type="date" id="date"  value="ProduceDate">
                <input type="submit" value="提交">
            </div>
        </form>

    </div>

</template>

<style lang="scss"  scoped>

.mfrEdit{
    width: 100%;
    height: 100%;
    @include layout(column ,center,center);

    .confirmClient p{
        text-align: center;
        font-size: 1rem;
        letter-spacing: 0.2rem;
        font-weight: 700;

        color: $black60;
        
    }
    .goToProduce{
        margin: 1rem 0;

        input[type="date"]{
            margin: 0 1rem;
            padding: 0.5rem 2rem;
            border-radius: 2rem;
            border: black 2px solid;

            

        }
        input[type="submit"]{
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            border: black 2px solid;

            background-color: transparent;
            &:hover{
                background-color: $pointColor;
                color: white;
                border: $pointColor 1.5px solid;

                cursor: pointer;

            }

        }
    }
}

</style>
