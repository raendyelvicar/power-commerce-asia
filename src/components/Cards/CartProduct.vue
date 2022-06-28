<template lang="">
  <div class="cart-product">
    <div class="flex flex-row justify-start items-center w-full">
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
    <div class="counter-wrapper flex flex-row justify-end items-end w-full">
      <div class="bottom-placement">
        <p class="text-base font-medium">Jumlah</p>
        <CounterItem :quantity="product.quantity" :product="product" />
        <div class="delete-icon" @click="pushToBin(product)">
          <Trash
            width="20px"
            height="20px"
            color="#c9c9c9"
            class="trash-icon cursor-pointer"
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

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.image-container {
  width: auto;
  height: 100px;
  border-radius: 10px;
}

.trash-icon {
  margin: 20px;
}

.delete-icon {
  position: relative;
  margin-left: 30px;
  width: 100%;
}
.bottom-placement {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 600px) {
  .cart-product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding: 10px;
  }

  .counter-wrapper {
    position: relative;
  }

  .delete-icon {
    margin-left: 0px;
    margin-right: 10px;
    width: 40%;
    display: flex;
    align-items: center;
  }

  .trash-icon {
    margin: 5px;
  }

  svg {
    width: 18px;
    height: 18px;
  }

  .bottom-placement {
    flex-direction: row-reverse;
  }

  .bottom-placement p {
    display: none;
  }

  .image-container img {
    border-radius: 5px;
  }

  .counter-wrapper {
    margin-top: 10px;
  }
}
</style>
