<template>
  <div class="container-fluid title">
    <div class="bar">
      <div class="bar_item bar_year">
        2012
      </div>
      <div class="bar_item bar_license">
        СРО-П-174-01102012
      </div>
      <div class="bar_item bar_requirements">
        Новые требования к членству
      </div>
    </div>
    <div class="menu">
      <NuxtLink
        to="/"
        class="menu-item"
      >
        Главная
      </NuxtLink>
      <NuxtLink
        to="/about"
        class="menu-item"
      >
        Об ассоциации
      </NuxtLink>
      <NuxtLink
        to="/membership"
        class="menu-item"
      >
        Членство СРО
      </NuxtLink>
      <NuxtLink
        to="/info"
        class="menu-item"
      >
        Информация, обязательная для размещения
      </NuxtLink>
      <NuxtLink
        to="/law"
        class="menu-item"
      >
        Законодательство
      </NuxtLink>
      <NuxtLink
        to="/registry"
        class="menu-item"
      >
        Реестр членов
      </NuxtLink>
      <NuxtLink
        to="/contacts"
        class="menu-item"
      >
        Контакты
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "header"
}
</script>

<style scoped>
.title {
  width: 100%;
  height: 100px;
  background: #eeeeee;
  justify-content: space-around;
}

.menu {
  height: 70px;
  display: flex;
  align-items: center;
  padding: 20px 10px;
}

.menu-item {
  margin: auto;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}

.bar {
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  font-weight: bold;
}

.bar_item {
  text-align: center;
  text-transform: uppercase;
  padding: 5px;
  margin-left: 10px;
  background: yellow;
}

.bar_requirements {
  background: yellow;
}
</style>
