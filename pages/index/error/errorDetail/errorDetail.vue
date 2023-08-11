<template>
    <div class="container">
        <div class="container-info">
            <!-- <div class="info-head">集装箱故障信息</div> -->
            <div class="info-items">
                箱体发生变形
            </div>
        </div>
    </div>
</template>
  
<script setup>

</script>
  
<style scoped lang="scss">
.container-info {
  font-size: 17px;
  background-color: #efefef;
  width: 80vw;
  padding: 2vh 4vw 2vh 4vw;
  margin: 4vh 0 4vh 0;

  .info-head {
    font-size: 25px;
    font-weight: bold;
    margin: 0 0 2vh 0;
  }

  .info-items {
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
  