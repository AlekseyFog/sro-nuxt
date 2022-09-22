<template>
  <div class="container attention">
    <div class="row">
      <h3 class="col-12 attention_header">
        НА ЧТО СЛЕДУЕТ ОБРАТИТЬ ВНИМАНИЕ ПРИ ВСТУПЛЕНИИ В СРО:
      </h3>
    </div>
    <div class="row attention_block">
      <div class="col-12">
        <ol class="attention_list">
          <li class="attention_list__item">Наличие и состав сведений о СРО в реестре Ростехнадзора</li>
          <li class="attention_list__item">Законность оплаты взноса за счет заемных средств</li>
          <li class="attention_list__item">Минимальный размер страховой суммы по договорам страхования ответственности членов СРО</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AttentionBlock"
}
</script>

<style scoped>
.attention{
  margin-top: 80px;
}
.attention_header{
  font-size: 30px;
  display: flex;
  flex-direction: column;
  margin: auto;
}
.attention_header:after{
  background-color: #FABB38;
  content: "";
  display: block;
  height: 3px;
  width: 200px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.attention_list{
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}
.attention_list__item{
  font-size: 20px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #cccccc;
  margin-right: 25px;
}
.attention_list__item::marker{
content: '';
}
</style>
