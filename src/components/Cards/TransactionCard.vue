<template lang="">
  <div
    class="transaction-card flex flex-col justify-center w-full m-auto mb-4 p-4"
  >
    <div class="card-header items-center">
      <div class="header-left">
        <p class="font-bold text-base mr-2">
          {{ orderId }}
        </p>
        <p class="text-base font-regular text-grey">22 Apr 2022</p>
      </div>
      <TransactionStatus :status="status[0]" v-if="$i18n.locale == 'id'" />
      <TransactionStatus :status="status[1]" v-else />
    </div>
    <div class="line"></div>
    <div class="card-body">
      <div class="body-left">
        <div class="card-image">
          <img src="@/assets/images/product_1512983332_Ellips_H_800x800.jpg" />
        </div>
        <div class="card-desc flex flex-col justify-around items-start">
          <p class="product-name text-base font-bold">{{ product[0].name }}</p>
          <p class="product-amount text-sm text-grey">{{ amount }} CTN</p>
          <p class="product-size text-sm font-regular">
            1+ {{ $t("transactions.another_product") }}
          </p>
        </div>
      </div>
      <div class="total-purchase flex items-end font-medium text-sm desktop">
        {{ $t("transactions.total_purchase") }}
        <span class="text-base text-orange font-bold ml-2"
          >Rp{{ product[0].price }}</span
        >
      </div>
    </div>

    <div
      class="btn-container flex flex-col items-end desktop"
      v-if="status[0] === 'Pengiriman'"
    >
      <Button
        :cta="$i18n.t('transactions.cta.order_received')"
        bgColor="transparent"
        borderColor="#015CA1"
        textColor="#015CA1"
        bgHover="#f4f4f4"
      ></Button>
    </div>
    <div
      class="btn-container flex flex-col items-end desktop"
      v-else-if="status[0] === 'Selesai'"
    >
      <Button
        :cta="$i18n.t('transactions.cta.buy_again')"
        bgColor="transparent"
        borderColor="#015CA1"
        textColor="#015CA1"
        bgHover="#f4f4f4"
      ></Button>
    </div>

    <div class="btn-container mobile">
      <div class="mobile total-purchase font-medium text-sm">
        {{ $t("transactions.total_purchase") }}
        <span class="text-base text-orange font-bold"
          >Rp{{ product[0].price }}</span
        >
      </div>
      <div class="btn-wrapper mobile" v-if="status[0] === 'Pengiriman'">
        <Button
          :cta="$i18n.t('transactions.cta.order_received')"
          bgColor="#ffffff"
          borderColor="#015CA1"
          textColor="#015CA1"
          bgHover="#f4f4f4"
        ></Button>
      </div>
      <div class="btn-wrapper mobile" v-else-if="status[0] === 'Selesai'">
        <Button
          :cta="$i18n.t('transactions.cta.buy_again')"
          bgColor="#ffffff"
          borderColor="#015CA1"
          textColor="#015CA1"
          bgHover="#f4f4f4"
        ></Button>
      </div>
    </div>
  </div>
</template>
<script>
import TransactionStatus from "@/components/Tags/TransactionStatus";
import Button from "@/components/Buttons/Button";
import axios from "axios";

export default {
  name: "TransactionCard",
  props: ["productId", "orderId", "amount", "status"],
  components: {
    TransactionStatus,
    Button,
  },
  data() {
    return {
      product: [],
    };
  },
  methods: {
    getProductById() {
      axios
        .get(
          `https://626b682ce5274e6664cba68e.mockapi.io/api/v1/products/${this.productId}`
        )
        .then((response) => {
          this.product.push(response.data);
        });
    },
  },
  mounted() {
    this.getProductById();
  },
};
</script>
<style scoped>
.transaction-card {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 10px;
}

.card-header,
.card-body,
.header-left,
.body-left {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.card-image {
  width: auto;
  height: 80px;
}

.line {
  background: #dddddd;
  height: 2px;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
}

.btn-wrapper.mobile,
.btn-container.mobile {
  display: none;
}

@media only screen and (max-width: 600px) {
  .transaction-card {
    padding: 10px;
  }

  .header-left {
    flex-direction: column;
  }

  .header-left h4 {
    margin: 0;
  }

  .line {
    margin: 10px;
  }

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
    width: 100%;
  }

  .btn-container .mobile.total-purchase span {
    margin-left: 0;
  }
  .desktop {
    display: none;
  }

  .btn-container.mobile,
  .btn-wrapper.mobile {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
}
</style>
