<template>
  <div class="form">
    <div class="form_title">
      <div class="form_title__img"></div>
      <div class="form_title__text">
        Напишите нам и вам будет предоставлен персональный менеджер
      </div>
    </div>
    <input
      class="form_input"
      type="text"
      placeholder="Ваше имя"
      required
    >
    <input
      class="form_input"
      type="tel"
      placeholder="Телефон"
      required
    >
    <input
      class="form_input"
      type="email"
      placeholder="Email"
    >
    <textarea class="form_input"/>
  </div>
</template>

<script>
export default {
  name: "FormOrder"
}
</script>

<style scoped>
.form{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  background: #eeeeee;
  border: 1px solid #cccccc;
  box-shadow: 1px 1px #cccccc;
}
.form_title{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.form_title__text{
  font-size: 20px;
  font-weight: bold;
}
.form_input{
  height: 30px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-bottom: 15px;
}
.form_input:first-child{
  margin-top: 15px;
}
.form_input:last-child{
  height: 50px;
}
</style>
