<template>
  <div class="docs">
    <img
      src="~/assets/doc1.png"
      alt="img"
      class="doc_img"
    />
    <img
      src="~/assets/doc2.png"
      alt="img"
      class="doc_img"
    />
    <img
      src="~/assets/doc3.png"
      alt="img"
      class="doc_img"
    />
    <img
      src="~/assets/doc4.png"
      alt="img"
      class="doc_img"
    />
    <img
      src="~/assets/doc5.png"
      alt="img"
      class="doc_img"
    />
  </div>
</template>

<script>
export default {
  name: "documents",
  meta: [
    {hid: 'description', name: 'description', content: 'СРО "Главпроект" - документы организации'}
  ],
}
</script>

<style scoped>
.docs {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.doc_img{
  margin: 10px 0;
}

@media (max-width: 768px) {
  .doc_img{
    max-width: 320px;
  }
}
</style>
