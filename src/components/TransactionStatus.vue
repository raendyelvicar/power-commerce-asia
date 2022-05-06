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
      console.log(this.status);
      if (this.status === "Menunggu Konfirmasi") {
        this.bgColor = "grey";
      } else if (this.status === "Dalam Proses") {
        this.bgColor = "orange";
      } else {
        this.bgColor = "#0dc400";
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
}
</style>
