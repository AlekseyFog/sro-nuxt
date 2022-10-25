<template>
  <div
    :class="[
        menuIsVisible && 'default-layout_locked',
        formIsVisible && 'default-layout_locked',
        successModalIsVisible && 'default-layout_locked',
      ]">
    <Title/>
    <HeadMenu @open-menu="setMenuIsVisible()"/>
    <MobileMenu
    v-if="menuIsVisible"
    @close-menu="hideMenu()"
    />
    <nuxt
      class="main"
      @open-form='setFormIsVisible()'
      @show-success="showSuccessModal()"
    />
    <MainFooter/>
    <OrderModal
      v-if="formIsVisible"
      @close-form="hideForm()"
    />
    <SuccessModal
      v-if="successModalIsVisible"
      @close_success="closeSuccessModal"
    />
  </div>
</template>

<script>
import HeadMenu from "@/components/HeadMenu";
import Title from "@/components/Title";
import MainFooter from "@/components/MainFooter";
import OrderModal from "@/components/OrderModal";
import SuccessModal from "@/components/SuccessModal";
import MobileMenu from "@/components/MobileMenu";

export default {
  transition: 'fade',

  components: {
    MobileMenu,
    OrderModal,
    HeadMenu,
    Title,
    MainFooter,
    SuccessModal
  },

  data:() => ({
    formIsVisible: false,
    menuIsVisible: false,
    successModalIsVisible: false,
  }),

  methods:{
    setFormIsVisible(){
      this.formIsVisible = true
    },
    setMenuIsVisible(){
      this.menuIsVisible = true
    },
    hideForm(){
      this.formIsVisible = false
    },
    hideMenu(){
      this.menuIsVisible = false
    },
    showSuccessModal() {
      this.formIsVisible = false;
      this.successModalIsVisible = true
    },
    closeSuccessModal() {
      this.successModalIsVisible = false
    },
  },
  created () {
    this.$nuxt.$on('open-form', () => {
      this.formIsVisible = true
    })
    this.$nuxt.$on('close-form', () => {
      this.formIsVisible = false
    })
    this.$nuxt.$on('show-success', () => {
      this.formIsVisible = false;
      this.successModalIsVisible = true
    })
  }
}
</script>

<style>
html, body {
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  line-height: 1.5;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background: #eeeeee;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.main{
  min-height: calc(100vh - 190px);
  z-index: 888;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.4s;
}

.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.default-layout_locked {
  position: fixed;
  left: 0;
}
</style>

