<template lang="">
  <div class="counter-item flex items-center justify-end">
    <a-icon
      type="minus-circle"
      :style="{ fontSize: '26px', fontWeight: '700', color: '#015CA1' }"
      @click="() => changeQuantityItem({ product: product, opt: 'decrease' })"
    />
    <span class="text-lg font-bold">
      {{ quantity }}
    </span>
    <a-icon
      type="plus-circle"
      theme="filled"
      :style="{ fontSize: '26px', fontWeight: '700', color: '#015CA1' }"
      @click="() => changeQuantityItem({ product: product, opt: 'increase' })"
    />
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "CounterItem",
  props: ["quantity", "product", "active"],
  methods: {
    ...mapActions(["changeQuantityItem"]),
  },
};
</script>
<style>
.counter-item .anticon {
  margin: 0 20px;
}

.counter-item span {
  margin: auto 20px;
  text-align: center;
}
</style>
