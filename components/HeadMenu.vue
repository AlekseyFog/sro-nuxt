<template>
  <div class="container-fluid d-none d-lg-block title">
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
  position: sticky;
  top: 0;
  width: 100%;
  height: 50px;
  background: #eeeeee;
  justify-content: space-around;
  z-index: 999;
  border-bottom: 1px solid #30182D;
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
a {
  color: black;
}

a:hover{
  text-decoration: none;
  border-bottom: 1px solid #FABB38;
}

a:visited{
  color: black;
}

a.nuxt-link-active {
  font-weight: bold;
}
a.nuxt-link-exact-active {
  border-bottom: 2px solid #FABB38;
}


</style>
