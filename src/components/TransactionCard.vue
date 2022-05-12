<template lang="">
  <div class="transaction-card">
    <div class="card-header">
      <div class="header-left">
        <h4 style="font-weight: 700; margin-right: 10px">{{ orderId }}</h4>
        <p style="font-weight: 500; color: grey">22 Apr 2022</p>
      </div>
      <TransactionStatus :status="status" />
    </div>
    <div class="line"></div>
    <div class="card-body">
      <div class="body-left">
        <div class="card-image">
          <img src="@/assets/images/product_1512983332_Ellips_H_800x800.jpg" />
        </div>
        <div class="card-desc">
          <p class="product-name">{{ product[0].name }}</p>
          <p class="product-amount">{{ amount }} CTN</p>
          <p class="product-size">1+ Produk Lainnya</p>
        </div>
      </div>
      <div class="total-purchase">
        Total Pembayaran <span>Rp {{ product[0].price }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import TransactionStatus from "@/components/TransactionStatus";
import axios from "axios";
export default {
  name: "TransactionCard",
  props: ["productId", "orderId", "amount", "status"],
  components: {
    TransactionStatus,
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
<style>
.transaction-card {
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
.card-header h4,
.card-header p {
  margin: 0;
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.card-image {
  width: 100px;
  height: 100px;
}

.card-desc {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

.card-desc .product-name {
  font-weight: 700;
}

.card-desc .product-amount {
  color: grey;
}

.card-body .total-purchase {
  display: flex;
  align-items: flex-end;
}
.card-body .total-purchase {
  font-size: 14px;
}

.card-body .total-purchase span {
  color: orange;
  font-weight: 700;
  margin-left: 10px;
}

.line {
  background: #dddddd;
  height: 2px;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
