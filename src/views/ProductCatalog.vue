<template lang="">
  <div class="product-catalog">
    <h2 class="title text-2xl">
      {{ $t("product[0].product_catalog.catalog_kino_coin") }}
    </h2>
    <div class="product-container">
      <li v-for="product in pagination.showedItems" :key="product.id">
        <ProductCatalogCard :product="product"></ProductCatalogCard>
      </li>
    </div>
    <div class="pagination flex justify-center items-center">
      <a-pagination
        :class="[isLoading ? 'hidden' : '']"
        v-model="pagination.current"
        :defaultCurrent="1"
        :pageSize="pagination.pageSize"
        :total="pagination.totalCount"
        @change="onPageChange"
        @show-size-change="onShowSizeChange"
      />
    </div>
  </div>
</template>
<script>
import ProductCatalogCard from "@/components/Cards/ProductCatalogCard";
import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductCatalog",
  components: {
    ProductCatalogCard,
  },
  computed: {
    ...mapGetters(["products", "isLoading", "pagination"]),
  },
  methods: {
    ...mapActions(["fetchAllProducts", "changeCurrentPage"]),
    onPageChange(page) {
      compose(this.fetchAllProducts, this.changeCurrentPage)(page);
    },
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
    },
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
}

.product-container {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  margin: auto;
}

@media only screen and (max-width: 425px) {
  .product-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
