<template>
  <div
    class="menu"
    @focus="handleFocus"
    tabindex="0"
  >
    <div
      class="menu__wrapper"
      tabindex="1"
    >
      <img
        class="close__button"
        src="~/assets/close.png"
        alt="close"
        @click="close"
      />
      <div
        class="menu__item"
        @click="close"
      >
        <NuxtLink to="/">
          ГЛАВНАЯ
        </NuxtLink>
      </div>
      <div class="menu__item_extended">
        <div
          class="menu__item"
          @click="menuOpenHandler"
        >
          Об ассоциации
          <div class="triangle-down" :class="[submenuIsOpen && 'triangle-down_opened']"/>
        </div>
        <Transition name="slide-fade">
          <div
            class="menu__sub-items"
            v-if="submenuIsOpen"
          >
            <div
              class="menu__item"
              @click="close"
            >
              <NuxtLink
                to="/about"
              >
                О нас
              </NuxtLink>
            </div>
            <div
              class="menu__item"
              @click="close"
            >
              <NuxtLink
                to="/upQualif"
              >
                Повышение квалификации
              </NuxtLink>
            </div>
            <div
              class="menu__item"
              @click="close"
            >
              <NuxtLink
                to="/documents"
              >
                Документы СРО
              </NuxtLink>
            </div>
            <div
              class="menu__item"
              @click="close"
            >
              <NuxtLink
                to="/controls"
              >
                Органы управления
              </NuxtLink>
            </div>
            <div
              class="menu__item"
              @click="close"
            >
              <NuxtLink
                to="/covid"
              >
                Информация по covid-19
              </NuxtLink>
            </div>
          </div>
        </Transition>
      </div>
      <div class="menu__item_extended">
        <div
          class="menu__item"
          @click="membershipOpenHandler"
        >
          Членство СРО
          <div class="triangle-down" :class="[submenuMembershipIsOpen && 'membership-triangle-down_opened']"/>
        </div>
        <Transition name="slide-fade">
          <div class="menu__sub-items" v-if="submenuMembershipIsOpen">
            <div
              class="menu__item"
              @click="close"
            >
              <NuxtLink
                to="/check"
              >
                План проверок
              </NuxtLink>
            </div>
            <div
              class="menu__item"
              @click="close"
            >
              <NuxtLink
                to="/membershipTerms"
              >
                Условия вступления
              </NuxtLink>
            </div>
            <div
              class="menu__item"
              @click="close"
            >
              <NuxtLink
                to="/insurance"
              >
                Условия страхования
              </NuxtLink>
            </div>
          </div>
        </Transition>
      </div>
      <div
        class="menu__item"
        @click="close"
      >
        <NuxtLink to="/info">
          Информация, обязательная для размещения
        </NuxtLink>
      </div>
      <div
        class="menu__item"
        @click="close"
      >
        <NuxtLink to="/law">
          Законодательство
        </NuxtLink>
      </div>
      <div
        class="menu__item"
        @click="close"
      >
        <NuxtLink to="/registry">
          Реестр членов
        </NuxtLink>
      </div>
      <div
        class="menu__item"
        @click="close"
      >
        <NuxtLink to="/contacts">
          Контакты
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MobileMenu",
  data() {
    return {
      submenuIsOpen: false,
      submenuMembershipIsOpen: false,
    };
  },
  methods: {
    handleFocus() {
      this.$emit('close-menu')
    },
    close() {
      this.$emit('close-menu')
    },
    menuOpenHandler() {
      this.submenuIsOpen = !this.submenuIsOpen;
    },
    membershipOpenHandler() {
      this.submenuMembershipIsOpen = !this.submenuMembershipIsOpen;
    },
  }
}
</script>

<style scoped>
.menu {
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
}

.menu__wrapper {
  display: flex;
  flex-direction: column;
  width: 250px;
  min-height: 100vh;
  background: #465162;
  padding: 10px;
  margin-left: auto;
}

.menu__item {
  width: 100%;
  display: flex;
  margin-top: 20px;
  font-size: 15px;
}

.menu__item_extended {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f9f9f9;
}

.close__button {
  position: absolute;
  right: 15px;
  z-index: 100;
  font-size: 20px;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
}

a {
  color: white;
}

a.nuxt-link-exact-active {
  color: #7F2121;
}

a:visited {
  color: #ffffff;
}

.menu__sub-items, .menu__membership-sub-items {
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;
  opacity: 1;
  transition: 0.2s;
  margin: 10px 0;
  padding: 20px;
}

.triangle-down {
  margin-left: auto;
  width: 15px;
  height: 15px;
  border-top: 2px solid #7C7C7C;
  border-right: 2px solid #7C7C7C;
  transform: rotate(135deg);
  transition: all 0.2s ease-in-out;
}

.triangle-down_opened, .membership-triangle-down_opened {
  margin-left: auto;
  width: 15px;
  height: 15px;
  border-top: 2px solid #7C7C7C;
  border-right: 2px solid #7C7C7C;
  transform: rotate(-45deg);
  transition: all 0.2s ease-in-out;
  margin-top: 10px;
}

.slide-fade-enter-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

</style>
