<template lang="">
  <div class="product-catalog-card">
    <div class="wrapper" @click="seeDetailProduct">
      <div class="card-header w-full">
        <img :src="product.image" />
      </div>
      <div class="card-body p-2">
        <p class="product-title text-sm w-full">{{ product.name }}</p>
        <p
          class="product-price text-sm font-bold flex justify-center items-center text-orange"
        >
          <WalletStar
            height="20px"
            width="20px"
            color="#015CA1"
            style="margin-right: 5px"
          ></WalletStar>
          {{ product.price }}
        </p>
      </div>
    </div>
    <div class="button-container p-2">
      <Button
        :cta="$i18n.t('product[0].product_catalog.add_to_cart')"
        bgColor="transparent"
        borderColor="#015CA1"
        textColor="#015CA1"
        bgHover="#f4f4f4"
        class="bucket flex justify-center items-center w-full"
        @clickableEvent="addItemToCart"
      >
        <Plus
          height="10px"
          width="10px"
          color="#015CA1"
          slot="icon"
          style="margin-right: 5px"
        ></Plus>
      </Button>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Buttons/Button";
import Plus from "@/components/Icons/Plus";
import WalletStar from "@/components/Icons/WalletStar";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductCatalogCard",
  props: ["product"],
  components: {
    Button,
    Plus,
    WalletStar,
  },
  methods: {
    ...mapActions(["addToCart"]),
    seeDetailProduct() {
      window.location.href = "/products/" + this.product.id;
    },
    addItemToCart() {
      let res = this.addToCart(this.product);
      if (res)
        this.$message.info(
          this.$i18n.t("product[0].product_catalog.item_added_success")
        );
    },
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
  border-radius: 10px;
  transition: all 0.2s ease-in-out 0s;
  cursor: pointer;
}

.product-catalog-card:hover {
  transform: translateY(-5px);
}

.card-header img {
  border-radius: 10px 10px 0 0;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.card-body {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
}

.card-body p {
  line-height: 2;
}

.card-body .product-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media only screen and (max-width: 600px) {
  .product-catalog-card {
    margin: 20px 0;
    width: 100%;
  }
}
</style>
