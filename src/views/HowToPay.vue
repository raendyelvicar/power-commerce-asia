<template lang="">
  <div class="how-to-pay">
    <h2 class="title text-2xl">{{ $t("how_to_pay.title") }}</h2>
    <div class="box-container flex flex-col justify-center">
      <h3 class="text-center text-lg">
        {{ $t("how_to_pay.payment_duedate") }}
        <strong>Senin, 22 Mei 2022 - 13.00</strong>
      </h3>
      <div class="countdown-box">
        <Countdown deadline="May 20, 2022 08:05:56"></Countdown>
      </div>
      <div class="payment-information">
        <img class="bank-logo" src="@/assets/images/bni-logo.png" />
        <div class="information-box flex flex-row justify-between items-end">
          <div class="left">
            <p class="text-lg">
              {{ $t("how_to_pay.account_information.virtual_account_number") }}
            </p>
            <p class="text-lg font-bold">09808989092</p>
          </div>
          <div class="center text-center">
            <p class="text-lg">
              {{ $t("how_to_pay.account_information.total_purchase") }}
            </p>
            <p class="text-lg font-bold text-orange">Rp700.000</p>
          </div>
          <a class="right text-base">
            {{ $t("how_to_pay.account_information.see_details") }}</a
          >
        </div>
      </div>
      <div class="payment-instructions">
        <h3 class="text-blue font-bold text-lg" style="margin-bottom: 20px">
          {{ $t("how_to_pay.dropdown_payment.payment_instructions") }}
        </h3>
        <Accordion></Accordion>
      </div>
    </div>
  </div>
</template>
<script>
import Accordion from "@/components/Accordion/Accordion";
import Countdown from "vuejs-countdown";

export default {
  name: "HowToPay",
  components: {
    Accordion,
    Countdown,
  },
};
</script>
<style>
.how-to-pay {
  margin: auto;
  margin-bottom: 20px;
}

.title {
  padding: 10px;
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

.countdown-box {
  display: flex;
  justify-content: center;
}

.countdown-box .vuejs-countdown .digit {
  font-size: 48px;
  font-weight: 700;
  color: #015ca1;
}

.countdown-box .vuejs-countdown li {
  margin: 0 20px;
}

.countdown-box .vuejs-countdown li:after {
  margin-left: 20px;
  font-size: 48px;
  right: -30px;
  color: #015ca1;
}

@media only screen and (max-width: 375px) {
  .ant-menu-submenu-title {
    padding-left: 5px;
  }
}

@media only screen and (max-width: 768px) {
  .box-container {
    padding: 10px;
  }

  .information-box div p,
  .information-box a {
    font-size: 0.76rem;
  }

  .information-box {
    flex-wrap: wrap;
  }
  .information-box div {
    margin-bottom: 10px;
  }

  .information-box .center {
    text-align: right;
  }
  .information-box a {
    text-align: right;
    width: 100%;
  }
}
</style>
