<template>
  <div class="container about">
    <div class="row">
      <h2 class="col-12 about_header">
        ОРГАНЫ УПРАВЛЕНИЯ АССОЦИАЦИИ
      </h2>
    </div>
    <div class="row">
      <div class="col-12">
        <h4>
          ИНФОРМАЦИЯ О СТРУКТУРЕ И КОМПЕТЕНЦИИ ОРГАНОВ УПРАВЛЕНИЯ И СПЕЦИАЛИЗИРОВАННЫХ ОРГАНОВ САМОРЕГУЛИРУЕМОЙ
          ОРГАНИЗАЦИИ, КОЛИЧЕСТВЕННОМ И ПЕРСОНАЛЬНОМ СОСТАВЕ ПОСТОЯННО ДЕЙСТВУЮЩЕГО КОЛЛЕГИАЛЬНОГО ОРГАНА УПРАВЛЕНИЯ
          САМОРЕГУЛИРУЕМОЙ ОРГАНИЗАЦИИ
        </h4>
       <ControlsComponent />
      </div>
    </div>
  </div>
</template>

<script>
import ControlsComponent from "@/components/ControlsComponent";

export default {
  name: "controls",
  meta: [
    {hid: 'description', name: 'description', content: 'СРО "Главпроект" - органы управления ассоциации'}
  ],

  components:{
    ControlsComponent,
  }
}
</script>

<style scoped>
.about {
  padding: 50px;
}

.about_header {
  margin-bottom: 50px;
}

@media (max-width: 768px) {
  h4 {
    font-size: 20px;
  }
}
</style>
