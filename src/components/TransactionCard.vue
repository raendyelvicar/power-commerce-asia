<template lang="">
  <div class="transaction-card">
    <div class="card-header">
      <div class="header-left">
        <h4 style="font-weight: 700; margin-right: 10px">KMZWAY87AA</h4>
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
          <p class="product-name">Ellips with Hair Smoothing</p>
          <p class="product-amount">1 CTN</p>
          <p class="product-size">1+ Produk Lainnya</p>
        </div>
      </div>
      <div class="total-purchase">Total Pembayaran <span>Rp 720.000</span></div>
    </div>
  </div>
</template>
<script>
import TransactionStatus from "@/components/TransactionStatus";

export default {
  name: "TransactionCard",
  components: {
    TransactionStatus,
  },
  props: ["status"],
};
</script>
<style>
.transaction-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  margin: auto;
  margin-bottom: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
  align-items: start;
}

.card-desc .product-name {
  font-weight: 700;
}

.card-desc .product-amount {
  color: grey;
}

.card-body .total-purchase {
  display: flex;
  align-items: end;
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
