<template lang="">
  <div class="cart-product flex flex-row justify-between">
    <div class="flex flex-row justify-center items-center">
      <div class="image-container flex">
        <img :src="product.image" />
      </div>
      <div class="product-information pr-4 ml-4">
        <p class="text-base font-medium">
          {{ product.name }}
        </p>
        <p class="text-base text-grey">Unit: PCS</p>
        <p class="text-lg text-orange font-medium">{{ product.price }}</p>
      </div>
    </div>
    <div class="counter-wrapper flex flex-row justify-end items-end">
      <div class="bottom-placement flex flex-row justify-center items-center">
        <p class="text-base font-medium">Jumlah</p>
        <CounterItem :quantity="product.quantity" :product="product" />
        <div
          class="delete-icon relative w-full ml-6"
          @click="pushToBin(product)"
        >
          <Trash
            width="20px"
            height="20px"
            color="#c9c9c9"
            class="m-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CounterItem from "@/components/Counter/CounterItem";
import Trash from "@/components/Icons/Trash";
import Button from "@/components/Buttons/Button";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CartProduct",
  props: ["product"],
  components: {
    CounterItem,
    Trash,
    Button,
  },
  computed: {
    ...mapGetters(["modalVisibility"]),
  },
  methods: {
    ...mapActions(["pushToBin"]),
  },
};
</script>
<style>
.cart-product {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}
img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.image-container {
  width: auto;
  height: 80px;
}
</style>
