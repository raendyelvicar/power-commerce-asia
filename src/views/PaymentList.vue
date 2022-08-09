<template lang="">
  <div class="payment-list">
    <h2 class="title text-2xl">{{ $t("payment_list.title") }}</h2>
    <div class="payment-list-card">
      <PaymentCard :paymentInfo="paymentInfo[0]"></PaymentCard>
      <PaymentCard :paymentInfo="paymentInfo[1]"></PaymentCard>
      <PaymentCard :paymentInfo="paymentInfo[2]"></PaymentCard>
    </div>
  </div>
</template>
<script>
import PaymentCard from "@/components/Cards/PaymentCard";

export default {
  name: "PaymentList",
  components: {
    PaymentCard,
  },
  data() {
    return {
      paymentInfo: [
        {
          id: 1,
          payment_type: "BNI Virtual Account",
          bank_account: "00899218900",
          amount: "720.000",
          duedate: "22 Apr, 13:30:06",
        },
        {
          id: 2,
          payment_type: "Mandiri Bank Tranfer",
          bank_account: "0900937230",
          amount: "1.890.000",
          duedate: "22 Apr, 13:30:06",
        },
        {
          id: 3,
          payment_type: "Gopay E-Wallet",
          bank_account: "",
          amount: "1.720.000",
          duedate: "22 Apr, 13:30:06",
        },
      ],
    };
  },
};
</script>
<style>
.payment-list {
  margin-bottom: 50px;
}

.title {
  font-weight: 700;
  font-size: 20px;
}
</style>
