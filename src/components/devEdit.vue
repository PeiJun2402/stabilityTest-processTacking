<script setup>


</script>

<template>
  <div class="devEdit">
    <button>Finished</button>

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

        @include  buttonbStyle($pointColor 2px solid,transparent,$pointColor)

    }

}

</style>
