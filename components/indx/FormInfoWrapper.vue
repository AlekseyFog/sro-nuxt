<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-5">
        <FormOrder/>
        <img
          src="~/assets/reestr2.png"
          alt="img"
          class="registry-link_img"
        />
      </div>
      <div class="col-12 col-lg-7 infoblock">
        <img
          src="~/assets/activechelen.png"
          alt="img"
          class="infoblock_img"
        />
        <div class="infoblock_text">
          <span class="infoblock_text__header">
          АССОЦИАЦИЯ НАЦИОНАЛЬНЫЙ АЛЬЯНС ПРОЕКТИРОВЩИКОВ "ГЛАВПРОЕКТ"
          </span>
          <p class="infoblock_text__text">
            Успешно прошла внеплановую проверку Ростехнадзора проведенную в мае 2015г и подтвердила соблюдение Ассоциацией
            обязательных требований к саморегулируемым организациям
          </p>
        </div>
        <div class="infoblock_qualif">
          <h3 class="infoblock_qualif__header">
            повышение квалификации
          </h3>
          <ul>
            <li class="infoblock_qualif__row">
              "Схемы планировочной организации земельного участка"
            </li>
            <li class="infoblock_qualif__row">
              "Объемно-планировочные решения"
            </li>
            <li class="infoblock_qualif__row">
              "Конструктивные решения"
            </li>
            <li class="infoblock_qualif__row">
              "Внутренние инженерные системы отопления, вентиляции, теплогазоснабжения, водоснабжения и водоотведения"
            </li>
          </ul>
          <div class="infoblock_qualif__button">Перейти к разделу</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormOrder from "@/components/FormOrder";

export default {
  name: "FormInfoWrapper",
  components: {
    FormOrder,
  }
}
</script>

<style scoped>
.infoblock{
  display: flex;
  flex-direction: column;
}

.infoblock_img {
  /*width: 609px;*/
  /*height: 120px;*/
  margin-bottom: 30px;
}
.infoblock_img img {
  /*width: 609px;*/
  /*height: 120px;*/
}
.registry-link_img{
  margin-top: 30px;
  max-width: 320px;
}
.infoblock_text__header{
  font-size: 20px;
  font-weight: bold;
}

.infoblock_qualif__header{
  margin-top: 40px;
  text-transform: uppercase;
  text-align: center;
}


.infoblock_qualif__row{
  margin-top: 20px;
  vertical-align: middle;
}
.infoblock_qualif__row::marker{
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.infoblock_qualif__row:first-child::marker{
  content: 'П-01 ';
}
.infoblock_qualif__row:nth-child(2)::marker{
  content: 'П-02 ';
}
.infoblock_qualif__row:nth-child(3)::marker{
  content: 'П-03 ';
}
.infoblock_qualif__row:last-child::marker{
  content: 'П-04 ';
}

.infoblock_qualif__button{
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  padding: 15px;
  border: 1px solid #000000;
  border-radius: 5px;
  height: 50px;
  width: 250px;
}
@media (max-width: 992px) {
  .infoblock_img{
    margin-top: 20px;
    width: 100%;
  }
}
</style>
