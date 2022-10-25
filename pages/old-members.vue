<template>
  <div class="container-fluid">
    <div class="row">
      <h2 class="col-12">
        Сведения из реестра членов Ассоциации в отношении вышедших членов Ассоциации
      </h2>
    </div>
    <div class="row">
      <table class="table">
        <thead>
        <tr>
          <td>Рег.номер члена СРО</td>
          <td>Дата регистрации в реестре</td>
          <td>Дата прекращения членства</td>
          <td>Полное наименование для юридических лиц, ФИО для ИП</td>
          <td>Телефон</td>
          <td>ИНН</td>
          <td>Дата государственной регистрации ЮЛ, ИП</td>
          <td></td>
        </tr>
        </thead>
        <tbody
          v-for="(item, index) in file_data"
          :key="index"
          class="col-12"
        >
        <OldBlock
          :item="item"
        />
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>

import * as XLSX from "xlsx";

import OldBlock from '@/components/OldBlock';

export default {
  name: "active-members",
  components: {
    OldBlock,
  },
  async asyncData({$axios}) {
    let value = 'ГлавПроект - реестр вышедших .xlsx'
    value = encodeURIComponent(value);

    const mountains = await $axios.$get('http://xn--e1aybc.xn--80aebkzcteiegey.xn--p1ai/reestr/' + value, {responseType: 'arraybuffer'})
    // ON DEPLOY CHANGE THIS TO DOMAIN NAME
    var mo = new Uint8Array(mountains)
    var wb = XLSX.read(mo, {type: "array"})
    const firstSheetName = wb.SheetNames[0]
    const first_worksheet = wb.Sheets[firstSheetName]

    const file_data = XLSX.utils.sheet_to_json(first_worksheet, {header: 1});
    var shifted = file_data.shift()
    return ({file_data})
  },

  meta: [
    {description: 'СРО "Главпроект" - реестр вышедших членов организации'}
  ],
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },

}
</script>

<style scoped>
h2 {
  margin: 30px 0;
}

tr {
  border: 1px solid gray;
}

.td {
  border: 1px solid gray;
  padding: 5px;
  max-width: 30px;
  font-size: 8px;
  font-weight: bold;
  overflow-wrap: anywhere;
}
</style>
