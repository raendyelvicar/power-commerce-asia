<template lang="">
  <div class="product-catalog">
    <h2 class="title text-2xl">Katalog Kino Coin</h2>
    <div class="product-container">
      <li v-for="product in products" :key="product.id">
        <ProductCatalogCard
          :productId="product.id"
          :imgUrl="product.image"
          :title="product.name"
          :price="product.price"
        ></ProductCatalogCard>
      </li>
    </div>
  </div>
</template>
<script>
import ProductCatalogCard from "@/components/Cards/ProductCatalogCard";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductCatalog",
  components: {
    ProductCatalogCard,
  },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["fetchAllProducts"]),
  },
  created() {
    this.fetchAllProducts();
  },
};
</script>
<style>
li {
  list-style: none;
}

.product-catalog {
  margin-bottom: 50px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}

.product-container {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  margin: auto;
}

@media only screen and (max-width: 600px) {
  .product-catalog {
    width: 95%;
  }
}
</style>
