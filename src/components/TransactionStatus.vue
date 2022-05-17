<template lang="">
  <div class="transaction-status" :style="{ 'background-color': bgColor }">
    {{ status }}
  </div>
</template>
<script>
export default {
  name: "TransactionStatus",
  props: ["status"],
  data() {
    return {
      bgColor: "",
    };
  },
  methods: {
    setColor() {
      if (this.status === "Menunggu Konfirmasi") {
        this.bgColor = "#929292";
      } else if (
        this.status === "Dalam Proses" ||
        this.status === "Pengiriman"
      ) {
        this.bgColor = "#F5831F";
      } else if (this.status === "Selesai") {
        this.bgColor = "#015CA1";
      } else if (this.status === "Dibatalkan") {
        this.bgColor = "#FF0000";
      }
    },
  },
  mounted() {
    this.setColor();
  },
};
</script>
<style>
.transaction-status {
  color: #ffffff;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
}
</style>
