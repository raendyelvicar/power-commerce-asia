<template lang="">
  <div class="transaction-card">
    <div class="card-header">
      <div class="header-left">
        <h4 class="font-bold text-base" style="margin-right: 10px">
          {{ orderId }}
        </h4>
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
        <div class="card-desc">
          <p class="product-name text-base font-bold">{{ product[0].name }}</p>
          <p class="product-amount text-sm text-grey">{{ amount }} CTN</p>
          <p class="product-size text-sm font-regular">
            1+ {{ $t("transactions.another_product") }}
          </p>
        </div>
      </div>
      <div class="total-purchase font-medium text-sm desktop">
        {{ $t("transactions.total_purchase") }}
        <span class="text-base text-orange font-bold"
          >Rp{{ product[0].price }}</span
        >
      </div>
    </div>
    <div class="btn-container desktop" v-if="status[0] === 'Pengiriman'">
      <Button :cta="$i18n.t('transactions.cta.order_received')"></Button>
    </div>
    <div class="btn-container desktop" v-else-if="status[0] === 'Selesai'">
      <Button :cta="$i18n.t('transactions.cta.buy_again')"></Button>
    </div>
    <div class="mobile">
      <div class="total-purchase font-medium text-sm">
        {{ $t("transactions.total_purchase") }}
        <span class="text-base text-orange font-bold"
          >Rp{{ product[0].price }}</span
        >
      </div>
      <div class="btn-container mobile" v-if="status[0] === 'Pengiriman'">
        <Button :cta="$i18n.t('transactions.cta.order_received')"></Button>
      </div>
      <div class="btn-container mobile" v-else-if="status[0] === 'Selesai'">
        <Button :cta="$i18n.t('transactions.cta.buy_again')"></Button>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: auto;
  margin-bottom: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 20px;
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
.card-header {
  align-items: center;
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

.card-desc {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

.total-purchase {
  display: flex;
  align-items: flex-end;
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

.mobile {
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

  .header-left p {
    font-size: 0.75rem;
  }

  .line {
    margin: 10px;
  }

  .mobile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
  }

  .mobile .total-purchase {
    align-items: flex-start;
  }

  .mobile .total-purchase span {
    margin-left: 0;
  }

  .total-purchase {
    flex-direction: column;
    align-self: flex-end;
  }
  .desktop {
    display: none;
  }
}
</style>
