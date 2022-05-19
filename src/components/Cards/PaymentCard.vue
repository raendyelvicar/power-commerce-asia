<template lang="">
  <div class="payment-card">
    <div class="card-header">
      <div class="header-left">
        <Wallet
          color="#015CA1"
          height="20px"
          width="20px"
          style="margin-right: 10px"
        />
        <div>
          <span class="text-sm text-grey">Nomor Order</span>
          <p class="text-base font-bold">KMZWAY87AA</p>
        </div>
      </div>
      <div class="header-right text-right">
        <p class="text-sm text-grey">Bayar Sebelum</p>
        <p class="text-base font-medium text-red">22 Apr 2020, 13:30:06</p>
      </div>
    </div>
    <div class="line"></div>
    <div class="card-body">
      <div class="body-left">
        <div class="card-image">
          <img src="@/assets/images/bni-logo.png" />
        </div>
        <div class="card-desc">
          <p class="payment-type font-bold text-base">BNI Virtual Account</p>
          <p class="bank-account text-grey text-sm">008992189000</p>
        </div>
      </div>
      <div class="total-purchase font-medium text-sm">
        Total Pembayaran
        <span class="text-base text-orange font-bold">Rp1.890.000</span>
      </div>
    </div>
    <div class="btn-container">
      <div class="mobile total-purchase font-medium text-sm">
        Total Pembayaran
        <span class="text-base text-orange font-bold">Rp1.890.000</span>
      </div>
      <Button cta="Lihat Cara Bayar" url="/how-to-pay"></Button>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Buttons/Button";
import Wallet from "@/components/Icons/Wallet";
import axios from "axios";

export default {
  name: "TransactionCard",
  props: ["paymentInformation"],
  components: {
    Button,
    Wallet,
  },
};
</script>
<style scoped>
.payment-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: auto;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 20px;
  border-radius: 10px;
}

.card-header,
.card-body,
.body-left {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
}

.card-header {
  align-items: center;
}

.card-header .header-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.card-image {
  width: 100px;
  height: auto;
  margin-right: 30px;
}

.card-desc {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.total-purchase {
  display: flex;
  align-items: flex-end;
}

.btn-container .mobile.total-purchase {
  display: none;
}

.total-purchase span {
  margin-left: 10px;
}

.line {
  background: #dddddd;
  height: 2px;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
}

.btn-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

@media only screen and (max-width: 600px) {
  .desktop {
    display: none;
  }
}

@media only screen and (max-width: 768px) {
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 10px;
  }

  .total-purchase {
    display: none;
  }

  .btn-container .mobile.total-purchase {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .btn-container .mobile.total-purchase span {
    margin-left: 0;
  }
}
</style>
