<template lang="">
  <div class="product-catalog-card">
    <div class="card-header">
      <img :src="imgUrl" />
    </div>
    <div class="card-body">
      <p class="product-title text-base font-bold">{{ title }}</p>
      <p class="product-price">{{ price }}</p>
    </div>
    <Button cta="Keranjang"></Button>
  </div>
</template>
<script>
import Button from "@/components/Buttons/Button";

export default {
  name: "ProductCatalogCard",
  props: ["productId", "imgUrl", "title", "price"],
  components: {
    Button,
  },
};
</script>
<style>
.product-catalog-card {
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-direction: column;
  width: 12rem;
  height: auto;
  margin: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out 0s;
  cursor: pointer;
}
.product-catalog-card:hover {
  transform: translateY(-5px);
}

.card-header {
  width: 100%;
}

.card-header img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.card-body {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: start;
  margin: 10px 0;
}

.card-body .product-title {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

button.button {
  margin-top: 10px;
}
</style>
