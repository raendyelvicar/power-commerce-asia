<template>
  <div class="home">
    <div id="filter-section">
      <button
        class="filter active"
        id="all"
        @click="filterTransactionsByStatus('all')"
      >
        Semua
      </button>
      <div v-for="item in status" :key="item.id">
        <button
          class="filter"
          :id="item"
          @click="filterTransactionsByStatus(item)"
        >
          {{ item }}
        </button>
      </div>
    </div>
    <div v-for="item in transactions" :key="item.id">
      <TransactionCard
        :orderId="item.order_id"
        :amount="item.amount"
        :productId="item.productId"
        :status="item.status"
      ></TransactionCard>
    </div>
  </div>
</template>

<script>
import TransactionCard from "@/components/TransactionCard";
import FilterComponent from "@/components/FilterComponent";
import axios from "axios";

export default {
  name: "Home",
  components: {
    TransactionCard,
    FilterComponent,
  },
  data() {
    return {
      status: [
        "Menunggu Konfirmasi",
        "Dalam Proses",
        "Pengiriman",
        "Selesai",
        "Dibatalkan",
      ],
      transactions: [],
      activeTab: "",
    };
  },
  methods: {
    getAllTransactions() {
      axios
        .get(`https://626b682ce5274e6664cba68e.mockapi.io/api/v1/transactions`)
        .then((response) => {
          this.transactions = response.data;
        });
    },
    filterTransactionsByStatus(status) {
      // Get the container element
      var btnContainer = document.getElementById("filter-section");

      // Get all buttons with class="btn" inside the container
      var btns = btnContainer.getElementsByClassName("filter");

      // Loop through the buttons and add the active class to the current/clicked button
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }

      if (status == "all") {
        this.getAllTransactions();
      } else {
        axios
          .get(
            `https://626b682ce5274e6664cba68e.mockapi.io/api/v1/transactions?filter=${status}`
          )
          .then((response) => {
            this.transactions = response.data;
          });
      }
    },
  },
  mounted() {
    this.getAllTransactions();
  },
};
</script>

<style>
#filter-section {
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: row;
}
.filter {
  color: #929292;
  margin-right: 10px;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px #929292 solid;
  opacity: 0.5;
  cursor: pointer;
}

.filter.active {
  opacity: 1;
  color: #015ca1;
  border-color: 1px #015ca1 solid;
  background-color: #b0dfe5;
}
</style>
