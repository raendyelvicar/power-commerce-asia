<template lang="">
  <div class="detail-product">
    <Slideshow class="slideshow"></Slideshow>

    <div class="product-information flex flex-col">
      <h3 class="product-title text-2xl font-bold" style="margin-bottom: 0">
        {{ product.name }}
      </h3>

      <div class="line"></div>

      <div class="product-meta flex flex-col">
        <div class="flex flex-row justify-left">
          <p class="text-base font-medium" style="width: 50px">SKU</p>
          <p class="text-base font-medium">GE-701277</p>
        </div>

        <br />

        <div class="flex flex-row justify-left items-center">
          <div
            class="flex justify-left items-center"
            style="width: 50px; height: 30px"
          >
            <WalletStar height="30px" width="30px" color="#015CA1"></WalletStar>
          </div>
          <p class="text-2xl font-bold text-orange">{{ product.price }}</p>
        </div>
      </div>

      <div class="line"></div>

      <div class="product-description text-sm text-justify font-medium">
        Occaecat irure est nisi fugiat officia velit labore in dolore eu
        laboris. Dolore laboris proident sunt ea excepteur veniam. Ut
        reprehenderit ullamco minim do aliquip veniam nostrud pariatur dolor
        culpa laboris occaecat.
      </div>

      <div class="notes text-xs text-justify font-bold bg-blue-baby">
        Catatan: Eu elit non ad et eiusmod enim tempor mollit excepteur tempor
        deserunt ut.
      </div>

      <div class="btn-container flex flex-row">
        <Button
          :cta="$i18n.t('product[1].detail_product.back')"
          bgColor="#ffffff"
          borderColor="#015CA1"
          textColor="#015CA1"
          bgHover="#f4f4f4"
          class="back flex justify-center items-center"
          style="margin: 20px 10px"
          @clickableEvent="returnToCatalog"
        >
        </Button>
        <Button
          :cta="$i18n.t('product[1].detail_product.add_to_cart')"
          bgColor="#015CA1"
          borderColor="#015CA1"
          textColor="#ffffff"
          bgHover="#015CA1"
          class="bucket flex justify-center items-center"
          style="margin: 20px 10px"
          @clickableEvent="addItemToCart"
        >
          <Plus
            height="10px"
            width="10px"
            color="#ffffff"
            slot="icon"
            style="margin-right: 5px"
          ></Plus>
        </Button>
      </div>
    </div>
  </div>
</template>
<script>
import Slideshow from "@/components/Slideshow/Slideshow";
import Plus from "@/components/Icons/Plus";
import WalletStar from "@/components/Icons/WalletStar";
import Button from "@/components/Buttons/Button";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DetailProduct",
  components: {
    Slideshow,
    Plus,
    WalletStar,
    Button,
  },
  data() {
    return {
      id: 0,
      product: [],
    };
  },
  methods: {
    ...mapActions(["addToCart"]),
    addItemToCart() {
      let res = this.addToCart(this.product);
      if (res)
        this.$message.info(
          this.$i18n.t("product[0].product_catalog.item_added_success")
        );
    },
    getProductById() {
      this.product = this.productById(this.$route.params.id);
    },
    returnToCatalog() {
      window.location.href = "/catalog";
    },
  },
  computed: {
    ...mapGetters(["productById"]),
  },
  mounted() {
    this.getProductById();
  },
};
</script>
<style scoped>
.detail-product {
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 50px;
}

.line {
  background-color: #d9d9d9;
  width: 100%;
  height: 2px;
  border-radius: 10px;
  margin: 20px 0;
}

.notes {
  padding: 10px;
  margin-top: 20px;
}

.btn-container {
  justify-content: flex-end;
}

button.button {
  width: 25%;
}

@media only screen and (max-width: 768px) {
  .detail-product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-gap: 20px;
  }

  .btn-container {
    justify-content: center;
  }

  button.button {
    width: 100%;
  }
}
</style>
