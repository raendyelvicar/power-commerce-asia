<template lang="">
  <div class="cart-product flex flex-row justify-between">
    <div class="flex flex-row justify-center items-center">
      <div class="image-container flex">
        <img src="@/assets/images/products/iphone_1.jpg" />
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
          @click="() => showModal(true)"
        >
          <Trash
            :id="product.id"
            width="20px"
            height="20px"
            color="#c9c9c9"
            class="m-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
    <a-modal centered :visible="modalVisibility" :footer="null" :width="320">
      <div class="flex flex-col justify-center items-center w-full">
        <Trash width="72px" height="72px" color="#c9c9c9" class="m-4" />

        <p class="text-base font-medium text-blue mb-2">
          Yakin ingin menghapus produk ini?
        </p>
        <Button
          cta="Hapus"
          bgColor="#015CA1"
          borderColor="#015CA1"
          textColor="#ffffff"
          bgHover="#015CA1"
          class="buy flex justify-center items-center text-base w-full mb-2"
          @clickableEvent="() => removeFromCart(product.id)"
        />
        <Button
          cta="Batalkan"
          bgColor="#ffffff"
          borderColor="#015CA1"
          textColor="#015CA1"
          class="buy flex justify-center items-center text-base w-full mb-2"
          @clickableEvent="() => showModal(false)"
        />
      </div>
    </a-modal>
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
    ...mapActions(["showModal", "removeFromCart"]),
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
