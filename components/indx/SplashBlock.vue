<template>
  <div class="splash container-fluid">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="splash__title">
          АССОЦИАЦИЯ
          <br />
          НАЦИОНАЛЬНЫЙ АЛЬЯНС ПРОЕКТИРОВЩИКОВ
          <span class="norap">«главпроект»</span>
        </div>
        <div class="splash__advantages"></div>
      </div>
      <div class="col-12 col-md-6">
        <div class="splash__join">
          <div class="splash__join_title"></div>
          <div class="splash__join_button"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplashBlock"
}
</script>

<style scoped>
.splash{
  min-height: 600px;
  padding: 70px 0;
  background: url("~assets/background-main.png") no-repeat;
  background-size: cover;
}

.splash__title{
  font-size: 30px;
  color: white;
  padding: 30px;
  background: rgba(0, 0, 0, 0.2);
}
.norap{
  text-transform: uppercase;
  font-size: 45px;
  margin-top: 15px;
  text-align: center;
}
</style>
