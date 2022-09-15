<template>
  <div class="header">
    <div class="menu-item">Об ассоциации</div>
    <div class="menu-item">Членство СРО</div>
    <div class="menu-item">Информация, обязательная для размещения</div>
    <div class="menu-item">Законодательство</div>
    <div class="menu-item">Реестр членов</div>
    <div class="menu-item">Контакты</div>
  </div>
</template>

<script>
export default {
  name: "header"
}
</script>

<style scoped>
.header{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70px;
  background: #eeeeee;
  padding: 10px 30px;
}

.menu-item{
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  padding: 5px;
  margin: 5px;
  text-align: center;
}
</style>
