<template lang="">
  <div class="cart-products">
    <h2 class="title text-2xl">Keranjang Kino Coin</h2>
    <div
      class="cart-list flex flex-col justify-center items-ends"
      v-for="item in cart"
      :key="item.id"
    >
      <CartProduct :product="item" />
    </div>
    <div
      class="flex flex-row justify-between items-center w-full"
      v-if="cart.length > 0"
    >
      <p class="text-base font-bold">
        Total Kino Coin
        <span class="text-orange text-lg ml-2">400.000 Kino Coin</span>
      </p>
      <Button
        cta="Beli"
        bgColor="#015CA1"
        borderColor="#015CA1"
        textColor="#ffffff"
        bgHover="#015CA1"
        class="buy flex justify-center items-center text-base"
        style="margin: 20px 10px; padding: 6px 60px"
      />
    </div>
    <div
      class="flex justify-center items-center w-full text-xl font-bold"
      style="height: 60vh"
      v-else
    >
      Keranjang belanjamu kosong
    </div>
  </div>
</template>
<script>
import CounterItem from "@/components/Counter/CounterItem";
import CartProduct from "@/components/Cards/CartProduct";
import Button from "@/components/Buttons/Button";
import Trash from "@/components/Icons/Trash";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    CounterItem,
    CartProduct,
    Button,
    Trash,
  },
  computed: {
    ...mapGetters(["cart"]),
  },
};
</script>
<style></style>
