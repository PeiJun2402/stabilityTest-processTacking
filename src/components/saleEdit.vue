<script setup>


</script>

<template>
    <div class="saleEdit">
        <form >
            <div class="confirmClient">
                <input type="checkbox" id="" name="vehicle1" value="confirmClient">
                <label for="vehicle1"> 通知客戶-完成測試</label><br>
            </div>
            <div class="goToProduce">
                <input type="checkbox" id="" name="vehicle1" value="goToProduce">
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