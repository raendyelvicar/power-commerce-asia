<template lang="">
  <div class="cart-products">
    <h2 class="title text-2xl">Keranjang Kino Coin</h2>
    <div class="cart-list flex flex-col justify-center items-ends">
      <CartProduct />
      <CartProduct />
    </div>
    <div class="flex flex-row justify-between items-center w-full">
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

    <a-modal
      centered
      :visible="modalVisibility"
      :footer="null"
      :width="320"
      @ok="() => showModal(false)"
      @cancel="() => showModal(false)"
    >
      <div class="flex flex-col justify-center items-center w-full">
        <a-icon
          type="delete"
          theme="filled"
          :style="{
            fontSize: '56px',
            opacity: '50%',
            cursor: 'pointer',
            margin: '10px',
          }"
        />

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
        />
        <Button
          cta="Batalkan"
          bgColor="#ffffff"
          borderColor="#015CA1"
          textColor="#015CA1"
          class="buy flex justify-center items-center text-base w-full mb-2"
        />
      </div>
    </a-modal>
  </div>
</template>
<script>
import CounterItem from "@/components/Counter/CounterItem";
import CartProduct from "@/components/Cards/CartProduct";
import Button from "@/components/Buttons/Button";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    CounterItem,
    CartProduct,
    Button,
  },
  computed: {
    ...mapGetters(["modalVisibility"]),
  },
  methods: {
    ...mapActions(["showModal"]),
  },
};
</script>
<style></style>
