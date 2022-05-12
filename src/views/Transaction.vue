<template>
  <div class="transaction">
    <h2 class="title">Transaction</h2>
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
    <div class="indicator" :class="[isLoading ? '' : 'hidden']">
      <a-spin :indicator="indicator" />
    </div>
    <div v-for="item in transactions" :key="item.id">
      <TransactionCard
        :orderId="item.order_id"
        :amount="item.amount"
        :productId="item.productId"
        :status="item.status"
      ></TransactionCard>
    </div>
    <div class="pagination flex justify-center items-center">
      <a-pagination
        :default-current="6"
        :total="500"
        :class="[isLoading ? 'hidden' : '']"
      />
    </div>
  </div>
</template>

<script>
import TransactionCard from "@/components/TransactionCard";
import FilterComponent from "@/components/FilterComponent";
import axios from "axios";

export default {
  name: "Transaction",
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
      isLoading: true,
      transactions: [],
      indicator: <a-icon type="loading" style="font-size: 24px" spin />,
    };
  },
  methods: {
    getAllTransactions() {
      axios
        .get(`https://626b682ce5274e6664cba68e.mockapi.io/api/v1/transactions`)
        .then((response) => {
          this.transactions = response.data;
          this.isLoading = false;
        });
    },
    filterTransactionsByStatus(status) {
      // Get the container element
      var btnContainer = document.getElementById("filter-section");

      // Get all buttons with class="btn" inside the container
      var btns = btnContainer.getElementsByClassName("filter");

      this.isLoading = true;
      // Loop through the buttons and add the active class to the current/clicked button
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });

        this.transactions = [];
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
            this.isLoading = false;
          });
      }
    },
    dragToScroll() {
      const slider = document.getElementById("filter-section");
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
      });
    },
  },
  mounted() {
    this.getAllTransactions();
    this.dragToScroll();
  },
};
</script>

<style>
.transaction {
  margin-bottom: 50px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}

.title {
  font-weight: 700;
  font-size: 20px;
}

.indicator {
  height: 70vh;
  visibility: visible;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination {
  padding-top: 50px;
  padding-bottom: 50px;
}

.hidden {
  visibility: hidden;
  height: 0vh;
}

#filter-section {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  transition: all 0.2s;
  /*transform: scale(0.98);*/
  will-change: transform;
  user-select: none;
  cursor: pointer;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

#filter-section::-webkit-scrollbar {
  display: none;
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
