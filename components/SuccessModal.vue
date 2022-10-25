<template>
  <div
    @focus="handleFocus"
    @focusout="handleFocusOut"
    tabindex="0"
    class="callmodal__wrapper"
  >
    <div class="callmodal" tabindex="1">
      <h3 class="callmodal__header">
        Спасибо!
      </h3>
      <img
        src="../assets/close.png"
        class="close-button"
        @click="close_success"
      />
      <div class="success__text">
        Наши специалисты свяжутся с Вами в ближайшее время
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CallModal',
  components: {
  },

  methods: {
    close_success() {
      this.$emit('close_success');
    },
    handleFocus() {
      this.$nuxt.$emit('close_success')
    },
    handleFocusOut() {
      console.log('не фокус')
    }
  },
};
</script>

<style scoped>
.callmodal__wrapper {
  position: absolute;
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
  z-index: 99;
}

.callmodal {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400vw;
  background: #ffffff;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 0 2px #f9f9f9;
}

.callmodal__header{
  color: #EA412C;
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  margin-bottom: 40px;
  align-self: center;
  justify-self: center;
}

.success__text{
  font-size: 30px;
  font-family: 'Raleway', sans-serif;
}

label{
  font-family: 'Raleway', sans-serif;
}

.close-button {
  position: absolute;
  right: 15px;
  top: 20px;
  z-index: 100;
  font-size: 20px;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
}
@media (min-width: 768px) {
  .callmodal {
    width: 500px;
    height: 400px;
    margin: 0 25%;
  }
}
@media (min-width: 992px) {
  .callmodal {
    margin: auto;
  }
}
</style>
