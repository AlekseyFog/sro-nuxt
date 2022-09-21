<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <FormOrder />
      </div>
      <div class="col-8"></div>
    </div>
  </div>
</template>

<script>
import FormOrder from "@/components/FormOrder";

export default {
  name: "FormInfoWrapper",
  components:{
    FormOrder,
  }
}
</script>

<style scoped>

</style>
