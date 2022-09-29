<template>
  <div class="contacts container">
    <div class="row">
      <div class="col-12 card">
        <yandexMap
          :coords="coords"
          :zoom="10"
        >
          <ymapMarker
            :coords="coords"
            :marker-id="123"
          />
        </yandexMap>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-4">
        <h3>Наш адрес:</h3>
      </div>
      <div class="col-12 col-md-4">
        <h3>Контактные телефоны:</h3>
      </div>
      <div class="col-12 col-md-4">
        Напишите нам, и Вам будет предоставлен персональный менеджер
      </div>
    </div>
  </div>
</template>
<script>

import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  name: "contacts",
  components: { yandexMap, ymapMarker },
  data: () => ({
    coords: [
      54.82896654088406,
      39.831893822753904,
    ],
}),

}
</script>

<style scoped>

</style>
