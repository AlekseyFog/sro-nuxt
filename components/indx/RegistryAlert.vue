<template>
  <div class="container alert">
    <div class="row">
      <div class="col-12">
        <h1 class="alert_title">
          Уважаемые Коллеги!
        </h1>
        <p>
          Реестр членов Ассоциации размещен на официальном сайте во вкладке «Реестр членов» и полностью соответствует
          требованиям законодательства.
        </p>
        <p>
          Ранее на сайте так же функционировали дублирующие формы предоставления сведений из реестра членов Ассоциации,
          позволявшие иметь пользователям более удобный доступ к сведениям из реестра членов, однако, на данный момент,
          они находятся в процессе модернизации и приведения их в соответствие с требованиями законодательства,
          вступающими в силу 01 сентября 2022 года. Напоминаем, что с 01 сентября 2022 года вступает в силу пункт 9
          статьи 1 Федерального закона № 447-ФЗ от 30.12.2021 года, согласно которому, саморегулируемые организации
          обязаны вести реестр членов в составе единого реестра сведений о членах саморегулируемых организаций и их
          обязательствах.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistryAlert"
}
</script>

<style scoped>
.alert{
  padding: 30px;
  margin-top: -100px;
  background: #ffffff;
  border: 1px solid #cccccc;
  box-shadow: 1px 1px #cccccc;
}

@media (max-width: 992px) {
  .alert{
    margin-top: 0;
  }
}
</style>
