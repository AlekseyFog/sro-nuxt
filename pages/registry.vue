<template>
  <div class="container">
    <div class="row">
      <h2 class="col-12">Реестр членов СРО</h2>
    </div>
    <div class="row">
      <div class="card col-12 col-md-6">
        <strong>Сведения из реестра членов Ассоциации в отношении действующих членов Ассоциации</strong>
        <div class="card__main_reglinks">
          <NuxtLink
            to="/active-members"
            class="card__main_item card__main_reglinks-link"
          >Просмотреть
          </NuxtLink>
          <a href="/reestr/ГлавПроект - реестр действующих.xlsx" class="card__main_reglinks-link">
            Скачать
          </a>
        </div>
      </div>
      <div class="card col-12 col-md-6">
        <strong>Сведения из реестра членов Ассоциации в отношении лиц, прекративших членство в Ассоциации</strong>
        <div class="card__main_reglinks">
          <NuxtLink
            to="/old-members"
            class="card__main_item card__main_reglinks-link"
          >
            Просмотреть
          </NuxtLink>
          <a href="/reestr/ГлавПроект - реестр вышедших .xlsx" class="card__main_reglinks-link">
            Скачать
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "registry"
}
</script>

<style scoped>
h2{
  margin: 30px 0;
}
.card{
  padding: 15px;
}
.card__main_reglinks{
  margin: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
a{
  display: flex;
  align-items: center;
  justify-content: center;
  background: gray;
  width: 120px;
  height: 50px;
  border: 1px solid #35495E;
  box-shadow: #35495E;
  color: #f9f9f9;
  text-shadow: 1px 1px black;
  padding: 10px;
  margin: 15px;
  border-radius: 5px;
}

</style>
