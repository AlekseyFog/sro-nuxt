<template>
  <div class="container license">
    <div class="row">
      <div class="col-12 col-md-3 gov_item">
        <img
          src="~/assets/par-1.png"
          alt="img"
          class="gov_item__image"
        />
        <div class="gov_item__text">
          Ростехнадзор
        </div>
      </div>
      <div class="col-12 col-md-3 gov_item">
        <img
          src="~/assets/par-2.png"
          alt="img"
          class="gov_item__image"
        />
        <div class="gov_item__text">
          Министерство строительства и жилищно-коммунального хозяйства
        </div>
      </div>
      <div class="col-12 col-md-3 gov_item">
        <img
          src="~/assets/par-3.png"
          alt="img"
          class="gov_item__image"
        />
        <div class="gov_item__text">
          Комплекс градостроительной политики и строительства Москвы
        </div>
      </div>
      <div class="col-12 col-md-3 gov_item">
        <img
          src="~/assets/par-6.png"
          alt="img"
          class="gov_item__image"
        />
        <div class="gov_item__text">
          Национальное объединение изыскателей и проектировщиков
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GovLicense"
}
</script>

<style scoped>
.license{
  margin: 80px auto;
  border: 4px solid white;
  padding: 30px;
  border-radius: 10px;
}

.gov_item{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.gov_item__text{
  font-size: 15px;
}
</style>
