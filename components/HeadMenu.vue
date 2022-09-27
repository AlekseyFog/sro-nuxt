<template>
  <div class="container-fluid d-none d-lg-block title">
    <div class="menu">
      <div class="menu-item">
        <NuxtLink
          to="/"
        >
          Главная
        </NuxtLink>
      </div>
      <div class="menu-item about-menu">
        <NuxtLink
          to="/about"
        >
          Об ассоциации
        </NuxtLink>
        <div class="about-menu__sub">
          <NuxtLink
            to="/about"
            class="about-menu__sub-item">
            О нас
          </NuxtLink>
          <NuxtLink
            to="/meet"
            class="about-menu__sub-item"
          >
            Общее собрание
          </NuxtLink>
          <NuxtLink
            to="documents"
            class="about-menu__sub-item"
          >
            Документы СРО
          </NuxtLink>
          <NuxtLink
            to="controls"
            class="about-menu__sub-item"
          >
            Органы управления ассоциацией
          </NuxtLink>
          <NuxtLink
            to="covid"
            class="about-menu__sub-item"
          >Важная информация по COVID-19
          </NuxtLink>
        </div>
      </div>
      <div class="menu-item member-menu">
        <NuxtLink
          to="/membershipTerms"
        >
          Членство СРО
        </NuxtLink>
        <div class="member-menu__sub">
          <NuxtLink
            to="/membershipTerms"
            class="about-menu__sub-item"
          >
            Условия вступления в СРО
          </NuxtLink>
<!--          <div class="about-menu__sub-item">Образцы доекументов для вступления/выхода из СРО</div>-->
<!--          <div class="about-menu__sub-item">Информация по выпискам</div>-->
<!--          <div class="about-menu__sub-item">План проверок</div>-->
          <NuxtLink
            to="/insurance"
            class="about-menu__sub-item"

          >
            Условия страхования
          </NuxtLink>
        </div>
      </div>
      <div class="menu-item">
        <NuxtLink
          to="/info"
        >
          Информация, обязательная для размещения
        </NuxtLink>
      </div>
      <div class="menu-item">
        <NuxtLink
          to="/law"
        >
          Законодательство
        </NuxtLink>
      </div>
      <div class="menu-item">
        <NuxtLink
          to="/registry"
        >
          Реестр членов
        </NuxtLink>
      </div>
      <div class="menu-item">
        <NuxtLink
          to="/contacts"
        >
          Контакты
        </NuxtLink>
      </div>
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
  height: 70px;
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
  transition: all 0.2s ease;
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

a:hover {
  text-decoration: none;
  border-bottom: 1px solid #FABB38;
  transition: all 0.2s ease;
}

a:visited {
  color: black;
}

a.nuxt-link-active {
  font-weight: bold;
}

a.nuxt-link-exact-active {
  border-bottom: 2px solid #FABB38;
}


.about-menu__sub, .member-menu__sub {
  position: absolute;
  top: 47px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  min-width: 200px;
  white-space: nowrap;
  box-shadow: 0 2px 2px gray;
  border-radius: 5px;
  height: 0;
  overflow: hidden;
  background: #eae6e6;
  transition: all 150ms ease-in-out;
}

.about-menu:hover .about-menu__sub {
  height: auto;
  transition: all 150ms ease-in-out;
  padding: 5px 10px 20px;
}

.member-menu:hover .member-menu__sub {
  height: auto;
  transition: all 150ms ease-in-out;
  padding: 5px 10px 20px;
}

.about-menu__sub-item {
  height: 40px;
  padding: 15px;
  margin-top: 5px;
  border-bottom: 1px solid #f9f9f9;
}

.about-menu__sub-item:last-child {
  border: none;
}

</style>
