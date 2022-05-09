<template lang="">
  <button
    class="filter"
    :class="[isActive ? 'active' : '']"
    @click="filterTransactionsByStatus(status)"
  >
    {{ status }}
  </button>
</template>
<script>
export default {
  props: ["isActive", "status"],

  methods: {
    filterTransactionsByStatus(status) {
      axios
        .get(
          `https://626b682ce5274e6664cba68e.mockapi.io/api/v1/transactions?filter=${status}`
        )
        .then((response) => {
          this.transactions = response.data;
        });
    },
  },
};
</script>
<style scoped>
.filter {
  color: #929292;
  margin-right: 10px;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px #929292 solid;
  opacity: 0.5;
  cursor: pointer;
}

.filter.active {
  opacity: 1;
  color: #015ca1;
  border-color: 1px #015ca1 solid;
  background-color: #b0dfe5;
}
</style>
