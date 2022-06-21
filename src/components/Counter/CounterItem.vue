<template lang="">
  <div class="counter-item flex items-center justify-end">
    <a-icon
      type="minus-circle"
      :style="{
        fontSize: '26px',
        fontWeight: '700',
        color: '#015CA1',
      }"
      @click="decrement"
    />
    <span class="text-lg font-bold">
      {{ number }}
    </span>
    <a-icon
      type="plus-circle"
      theme="filled"
      :style="{
        fontSize: '26px',
        fontWeight: '700',
        color: '#015CA1',
      }"
      @click="increment"
    />
  </div>
</template>
<script>
export default {
  name: "CounterItem",
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    increment() {
      this.number += 1;
    },
    decrement() {
      if (this.number === 0) {
        return;
      }

      this.number -= 1;
    },
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
