<template lang="">
  <div class="how-to-pay">
    <h2 class="title text-2xl">Cara Bayar</h2>
    <div class="box-container flex flex-col justify-center">
      <h3 class="text-center text-lg">
        Pembayaran anda akan berakhir pada
        <strong>Senin, 18 April 2022 - 13.00</strong>
      </h3>
      <div class="countdown-box"></div>
      <div class="payment-information">
        <img class="bank-logo" src="@/assets/images/bni-logo.png" />
        <div class="information-box flex flex-row justify-between items-end">
          <div class="left">
            <p class="text-lg">Nomor Virtual Account</p>
            <p class="text-lg font-bold">09808989092</p>
          </div>
          <div class="center text-center">
            <p class="text-lg">Total Pembayaran</p>
            <p class="text-lg font-bold text-orange">Rp700.000</p>
          </div>
          <a class="right text-base">Lihat Rincian Pembayaran</a>
        </div>
      </div>
      <div class="payment-instructions">
        <h3 class="text-blue font-bold text-lg" style="margin-bottom: 20px">
          Instruksi Pembayaran
        </h3>
        <Accordion></Accordion>
      </div>
    </div>
  </div>
</template>
<script>
import Accordion from "@/components/Accordion/Accordion";

export default {
  name: "HowToPay",
  components: {
    Accordion,
  },
};
</script>
<style>
.how-to-pay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  margin: auto;
  margin-bottom: 20px;
}

.bank-logo {
  width: 120px;
  height: auto;
}

.box-container {
  padding: 20px 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.payment-information {
  margin: 20px 0;
}

.information-box {
  margin-bottom: 20px;
}
</style>
