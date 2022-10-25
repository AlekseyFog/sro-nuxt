<template>
  <div class="contacts container">
    <div class="row">
    </div>
    <div class="row">
      <div class="col-12 col-md-3">
        <h4>Наш адрес:</h4>
        <p>
          123022, г. Москва, ул. Красная Пресня, д. 28, IV, комната 1 А
        </p>
      </div>
      <div class="col-12 col-md-2">
        <h4>Телефон:</h4>
        <p>
          +7 (812) 458-72-72
        </p>
        <p>
          <span>Мы ждём Ваши звонки с 09 до 17 по МСК</span>
        </p>
      </div>
      <div class="col-12 col-md-3">
        <h4>Email:</h4>
        <p><a href="mailto:glawproekt2012@yandex.ru">glawproekt2012@yandex.ru</a></p>
      </div>
      <div class="col-12 col-md-4">
        <FormOrder />
      </div>
    </div>
  </div>
</template>
<script>

import FormOrder from "@/components/FormOrder";


export default {
  name: "contacts",
  meta: [
    {hid: 'description', name: 'description', content: 'СРО "Главпроект" - контакты'}
  ],
  components: {
    FormOrder
  }
}
</script>

<style scoped>
.row{
  margin: 20px 0;
}
h4{
  margin-bottom: 20px;
}

span{
  font-size: 12px;
  color: gray;
}
</style>
