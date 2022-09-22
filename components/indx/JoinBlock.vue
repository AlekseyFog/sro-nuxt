<template>
  <div class="container">
    <div class="row">
      <div class="col-12 question_block">
        Остались вопросы? Напишите нам!
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
      <div class="col-12 col-md-6"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JoinBlock"
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

</style>
