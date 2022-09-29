<template>
  <div class="bar">
    <div class="bar_item bar_year">
      2012
    </div>
    <div class="bar_item bar_license">
      СРО-П-174-01102012
    </div>
    <NuxtLink
      to="/newMembership"
      class="bar_item bar_requirements">
      Новые требования к членству
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "Title"
}
</script>

<style scoped>

.bar {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  font-weight: bold;
  background: #228dfe;
}

.bar_item {
  text-align: center;
  text-transform: uppercase;
  padding: 5px;
  margin-left: 10px;
  background: #FABB38;
}

.bar_license{
  color: black;
  background: none;
}

.bar_requirements {
  background: #ffffff;
  margin-left: 50px;
  border-radius: 3px;
}

@media(max-width: 992px){
  .bar{
    font-size: 10px;
  }
}
</style>
