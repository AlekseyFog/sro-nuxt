<template>
  <div class="splash-container container-fluid">
    <div class="row splash">
      <div class="col-12 col-lg-8">
        <div class="splash__title">
          АССОЦИАЦИЯ
          <br />
          НАЦИОНАЛЬНЫЙ АЛЬЯНС ПРОЕКТИРОВЩИКОВ
          <span class="norap">«главпроект»</span>
        </div>
        <div class="splash__advantages">
          <div class="advantage">
            НРС
            <span class="sub-advantage">оператор нрс</span>
          </div>
          <div class="advantage">
            ноприз
            <span class="sub-advantage">член ноприз</span>
          </div>
          <div class="advantage">
            9 лет
            <span class="sub-advantage">более 9 лет в госреестре</span>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 splash__join">
        <div class="">
          <div class="splash__join_title">вступление в СРО</div>
          <div
            class="splash__join_button"
            @click="showOrderModal()"
          >
            получить консультацию
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplashBlock",

  methods:{
    showOrderModal(){
      this.$nuxt.$emit('open-form')
    }
  }
}
</script>

<style scoped>
.splash-container {
  min-height: 600px;
  padding: 70px 0 0;
  background: url("~assets/background-main.png") no-repeat;
  background-size: cover;
}

.splash {
  margin: 0!important;
  background: rgba(255, 255,255, 0.2);
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


.splash__advantages{
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #FABB38;
  background: rgba(9, 9, 9, 0.2);
  font-size: 30px;
  text-transform: uppercase;
  margin: auto;
  padding: 30px;
  text-align: center;
}
.advantage{
  display: flex;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.sub-advantage{
  font-size: 15px;
  color: white;
}

.splash__join{
  font-size: 30px;
  text-align: center;
  margin: auto auto 50px;
}
.splash__join_title{
  text-transform: uppercase;
  font-size: 50px;
  color: white;
  text-shadow: 1px 1px #35495E;
}
.splash__join_button{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background: #FABB38;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 10px;
  margin: 40px auto 0;
  box-shadow: 1px 1px #35495E;
  max-width: 320px;
  cursor: pointer;
}

@media (max-width: 992px) {
  .splash__title{
    font-size: 20px;
  }
  .norap{
    font-size: 25px;
  }
  .splash__advantages{
    font-size: 20px;
  }
  .splash__join_title{
    font-size: 35px;
    margin-top: 30px;
  }
}
</style>
