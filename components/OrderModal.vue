<template>
  <div
    @focus="handleFocus"
    @focusout="handleFocusOut"
    tabindex="0"
    class="order-modal">
    <FormOrder
      tabindex="1"
      class="order__form-modal"
    />
  </div>
</template>

<script>
import FormOrder from "@/components/FormOrder";

export default {
  name: "OrderModal",
  components: {FormOrder},
  methods: {
    handleFocus() {
      this.$nuxt.$emit('close-form')
    },
    handleFocusOut() {
      console.log('не фокус')
    }
  }
}
</script>

<style scoped>
.order-modal {
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
  z-index: 999;
}

.order__form-modal {
  margin: auto;
}
</style>
