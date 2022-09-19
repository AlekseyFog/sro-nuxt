<template>
  <div>
    <HeadMenu />
    <nuxt/>
  </div>
</template>

<script>
import HeadMenu from "@/components/HeadMenu";

export default {
  transition: 'fade',
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  components: {
    HeadMenu,
  },
}
</script>

<style>
html, body{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  max-width: 100vw;
  margin: 0;
  padding: 0;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

