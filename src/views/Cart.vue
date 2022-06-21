<template lang="">
  <div class="cart-products">
    <h2 class="title text-2xl">Keranjang Kino Coin</h2>
    <div class="cart-list flex flex-col justify-center items-ends">
      <CartProduct class="mb-4" />
      <CartProduct class="mb-4" />
      <CartProduct class="mb-4" />
    </div>
  </div>
</template>
<script>
import CounterItem from "@/components/Counter/CounterItem";
import CartProduct from "@/components/Cards/CartProduct";

export default {
  name: "Cart",
  components: {
    CounterItem,
    CartProduct,
  },
};
</script>
<style></style>
