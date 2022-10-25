<template>
  <div class="container">
    <div class="row">
      <div class="col-12 question_block">
        Остались вопросы?<span @click="showOrderModal()">Напишите нам!</span>
      </div>
    </div>
    <div class="row join_block">
      <div class="col-12 col-md-6">
        <div class="join_block__title">
          <h3>ВСТУПИТЬ В АССОЦИАЦИЮ</h3>
          <h3 class="join_block__title-space">
        АССОЦИАЦИЯ НАЦИОНАЛЬНЫЙ АЛЬЯНС ПРОЕКТИРОВЩИКОВ "ГЛАВПРОЕКТ"
          </h3>
        </div>
        <p class="join_block__text">
          Вступить в СРО сегодня - это возможность получить выгоду уже завтра!
        </p>
      </div>
      <div class="col-12 col-md-6 join_block__button_wrap">
        <NuxtLink to="/membershipTerms" class="join_block__button">Условия вступления</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JoinBlock",

  methods:{
    showOrderModal(){
      this.$nuxt.$emit('open-form')
    }
  }
}
</script>

<style scoped>
.question_block {
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 1px 1px #000000;
  width: 100%;
  height: 70px;
  background: #228dfe;
  color: white;
  font-size: 30px;
}

.join_block {
  background: white;
  padding: 20px;
}
.join_block__title-space{
  margin-top: 20px;
  font-size: 30px;
}
.join_block__button_wrap{
  display: flex;
  align-items: center;
  justify-content: center;
}
.join_block__button{
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FABB38;
  padding: 15px;
  border: 1px solid #000000;
  border-radius: 5px;
  height: 50px;
  width: 250px;
}
a, a:hover, a:visited{
  color: black;
  text-decoration: none;
}
span{
  cursor: pointer;
  text-decoration: underline;
}

@media (max-width: 992px) {
  .question_block{
    font-size: 25px;
  }
  .join_block__title-space{
    font-size: 25px;
  }
}

</style>
