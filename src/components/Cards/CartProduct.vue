<template lang="">
  <div class="cart-product flex flex-row justify-between">
    <div class="flex flex-row justify-center items-center">
      <div class="image-container flex">
        <img src="@/assets/images/products/iphone_1.jpg" />
      </div>
      <div class="product-information pr-4 ml-4">
        <p class="text-base font-medium">
          iPhone 12 Mini 64 GB - Anim occaecat amet exercitation amet commodo
          culpa.
        </p>
        <p class="text-base text-grey">Unit: PCS</p>
        <p class="text-lg text-orange font-medium">150.000</p>
      </div>
    </div>
    <div class="counter-wrapper flex flex-row justify-end items-end">
      <div class="bottom-placement flex flex-row justify-center items-center">
        <p class="text-base font-medium">Jumlah</p>
        <CounterItem />
        <div class="delete-icon relative w-full ml-6">
          <a-icon
            type="delete"
            theme="filled"
            :style="{ fontSize: '20px', opacity: '50%', cursor: 'pointer' }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CounterItem from "@/components/Counter/CounterItem";

export default {
  name: "CartProduct",
  components: {
    CounterItem,
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

.delete-icon::before {
  content: "";
  width: 1px;
  height: 130%;
  position: absolute;
  background-color: #333333;
  left: -130%;
  bottom: 10;
}
</style>
