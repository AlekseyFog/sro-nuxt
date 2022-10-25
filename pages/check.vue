<template>
  <div class="container">
    <div class="row">
      <h2 class="col-12">
        План проверок
      </h2>
    </div>
    <div class="row">
      <table>
        <tr>
          <th>Наименование организации</th>
          <th>ИНН</th>
          <th>Дата проверки</th>
        </tr>
        <tr
          v-for="(item, index) in check"
          :key="index"
          class="col-12"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.inn }}</td>
          <td>{{ item.date }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import CHECK from '/static/check2022.json';

export default {
  name: "CheckPlan",
  meta: [
    {hid: 'description', name: 'description', content: 'СРО "Главпроект" - план проверок организаций'}
  ],
  data: () => ({
    check: CHECK,
  }),
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
}

</script>

<style scoped>
h2{
  margin: 30px 0;
}
tr{
  border-bottom: 1px solid #f9f9f9;
}
td{
  padding: 10px;
}
</style>
