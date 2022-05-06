<template>
  <div class="home">
    <TransactionCard status="Menunggu Konfirmasi"></TransactionCard>
    <TransactionCard status="Dalam Proses"></TransactionCard>
    <TransactionCard status="Pengiriman"></TransactionCard>
    <TransactionCard status="Pengiriman"></TransactionCard>
    <TransactionCard status="Pengiriman"></TransactionCard>
  </div>
</template>

<script>
import TransactionCard from "@/components/TransactionCard";

export default {
  name: "Home",
  components: {
    TransactionCard,
  },
};
</script>
