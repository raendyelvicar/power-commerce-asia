<template lang="">
  <div class="product-catalog-card">
    <div class="card-header">
      <img :src="imgUrl" />
    </div>
    <div class="card-body">
      <p class="product-title text-sm">{{ title }}</p>
      <p class="product-price text-sm font-bold">{{ price }}</p>
    </div>
    <Button cta="Keranjang" class="bucket flex justify-center items-center">
      <Plus
        height="12px"
        width="12px"
        color="#015CA1"
        slot="icon"
        style="margin-right: 5px"
      ></Plus>
    </Button>
  </div>
</template>
<script>
import Button from "@/components/Buttons/Button";
import Plus from "@/components/Icons/Plus";

export default {
  name: "ProductCatalogCard",
  props: ["productId", "imgUrl", "title", "price"],
  components: {
    Button,
    Plus,
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
  align-items: flex-start;
  margin: 10px 0;
}

.card-body p {
  line-height: 2;
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

@media only screen and (max-width: 600px) {
  .product-catalog-card {
    margin: 20px 0;
    width: 100%;
  }
}
</style>
