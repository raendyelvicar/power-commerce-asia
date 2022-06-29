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
          <span class="text-sm text-grey">{{
            $t("payment_list.header_information.order_number")
          }}</span>
          <p class="text-sm font-bold">KMZWAY87AA</p>
        </div>
      </div>

      <div class="header-right text-right">
        <p class="text-sm text-grey">
          {{ $t("payment_list.header_information.pay_before") }}
        </p>
        <p class="text-sm font-medium text-red">22 Apr 2020, 13:30:06</p>
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

      <div class="body-right">
        <div class="total-purchase font-medium text-sm">
          {{ $t("payment_list.card_information.total_purchase") }}
          <span class="text-base text-orange font-bold">Rp1.890.000</span>
        </div>
      </div>
    </div>

    <div class="btn-container">
      <div class="mobile total-purchase font-medium text-sm">
        {{ $t("payment_list.card_information.total_purchase") }}
        <span class="text-base text-orange font-bold">Rp1.890.000</span>
      </div>

      <Button
        :cta="$t('payment_list.card_information.how_to_pay')"
        bgColor="transparent"
        borderColor="#015CA1"
        textColor="#015CA1"
        bgHover="#f4f4f4"
        @clickableEvent="redirectToUrl"
        class="mt-4"
      ></Button>
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
  methods: {
    redirectToUrl() {
      window.location.href = "/how-to-pay";
    },
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
  align-items: flex-end;
}

.card-header {
  align-items: center;
}

.card-header .header-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.card-image {
  width: 100px;
  margin: auto;
  margin-right: 30px;
}

.card-image img {
  width: 100%;
}

.card-desc {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.body-right {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.body-right .total-purchase {
  margin-right: 10px;
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

@media only screen and (max-width: 375px) {
  .card-desc {
    align-items: flex-end;
  }

  .card-body {
    flex-direction: column;
    align-items: center;
  }

  .body-left {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .card-image {
    margin: auto 0px;
  }
}

@media only screen and (max-width: 600px) {
  .desktop {
    display: none;
  }

  .payment-card {
    padding: 10px;
  }
}

@media only screen and (max-width: 768px) {
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  button.button {
    margin-top: 0;
    padding: 5px 20px;
  }

  .total-purchase {
    display: none;
  }

  .btn-container .mobile.total-purchase {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
  }

  .btn-container .mobile.total-purchase span {
    margin-left: 0;
  }
}
</style>
