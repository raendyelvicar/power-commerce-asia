<template>
  <div class="transaction">
    <h2 class="title text-2xl">{{ $t("transactions.title") }}</h2>
    <div id="filter-section">
      <button
        class="filter active"
        id="all"
        @click="filterTransactionsByStatus('all')"
        v-if="lang === 'id-ID'"
      >
        Semua
      </button>
      <button
        class="filter active"
        id="all"
        @click="filterTransactionsByStatus('all')"
        v-else
      >
        All
      </button>
      <div v-for="item in $t('transactions.status')" :key="item.id">
        <button
          class="filter"
          :id="item"
          @click="filterTransactionsByStatus(item)"
        >
          {{ item }}
        </button>
      </div>

      <button
        class="desktop pending-payment font-medium text-red"
        @click="redirectToUrl"
      >
        <Wallet
          color="#ff0000"
          height="14px"
          width="14px"
          style="margin-right: 5px"
        />{{ $t("transactions.waiting") }} ({{ count }})
      </button>
    </div>
    <button
      class="mobile pending-payment font-bold text-black"
      @click="redirectToUrl"
    >
      <div
        style="
          height: 25px;
          width: 25px;
          background-color: #dbdbdb;
          border-radius: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
        "
      >
        <Wallet color="#015CA1" height="14px" width="14px" />
      </div>
      {{ $t("transactions.waiting") }} ({{ count }})
    </button>
    <div v-for="item in transactions" :key="item.id">
      <TransactionCard
        :orderId="item.order_id"
        :amount="item.amount"
        :productId="item.productId"
        :status="item.status"
      ></TransactionCard>
    </div>
    <div class="indicator" :class="[isLoading ? '' : 'hidden']">
      <a-spin :indicator="indicator" />
    </div>
    <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler">
      <div slot="no-more" style="margin: 0 20px">
        No more data
      </div></infinite-loading
    >
  </div>
</template>

<script>
import TransactionCard from "@/components/Cards/TransactionCard";
import FilterComponent from "@/components/Filter/FilterComponent";
import Wallet from "@/components/Icons/Wallet";
import InfiniteLoading from "vue-infinite-loading";
import axios from "axios";

const API = "https://626b682ce5274e6664cba68e.mockapi.io/api/v1";

export default {
  name: "Transaction",
  components: {
    TransactionCard,
    FilterComponent,
    Wallet,
    InfiniteLoading,
  },
  data() {
    return {
      lang: "",
      isLoading: true,
      count: 0,
      page: 1,
      limit: 5,
      infiniteId: +new Date(),
      transactions: [],
      indicator: <a-icon type="loading" style="font-size: 24px" spin />,
    };
  },
  methods: {
    infiniteHandler($state) {
      axios
        .get(API + "/transactions", {
          params: {
            page: this.page,
            limit: this.limit,
          },
        })
        .then(({ data }) => {
          if (data.length) {
            this.page += 1;
            this.transactions.push(...data);
            this.isLoading = false;
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    },
    changeType() {
      this.page = 1;
      this.transactions = [];
      this.infiniteId += 1;
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

      let stat = "";
      if (status == "Menunggu Konfirmasi" || status === "To Pay") {
        stat = "Menunggu Konfirmasi";
      } else if (status === "Dalam Proses" || status === "Proceed") {
        stat = "Dalam Proses";
      } else if (status === "Pengiriman" || status === "Delivered") {
        stat = "Pengiriman";
      } else if (status === "Selesai" || status === "Completed") {
        stat = "Selesai";
      } else if (status === "Dibatalkan" || status === "Cancelled") {
        stat = "Dibatalkan";
      }

      if (status == "all") {
        this.getAllTransactions();
      } else {
        axios
          .get(
            `https://626b682ce5274e6664cba68e.mockapi.io/api/v1/transactions?filter=${stat}`
          )
          .then((response) => {
            this.transactions = response.data;
            this.isLoading = false;
          });
      }
    },
    getCountPendingPayment() {
      axios
        .get(
          `https://626b682ce5274e6664cba68e.mockapi.io/api/v1/transactions?filter=Menunggu Konfirmasi`
        )
        .then((response) => {
          this.count = response.data.length;
        });
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
    redirectToUrl() {
      window.location.href = "/payment-list";
    },
  },
  created() {
    this.lang = this.$i18n.locale;
  },
  mounted() {
    this.dragToScroll();
    this.getCountPendingPayment();
    this.filterTransactionsByStatus("all");
  },
};
</script>

<style>
.transaction {
  margin-bottom: 50px;
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
  margin-bottom: 20px;

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
  padding: 8px 12px;
  border-radius: 10px;
  cursor: pointer;
  color: #929292;
  margin-right: 10px;
  border: 1px #929292 solid;
  opacity: 0.5;
}

.filter.active {
  opacity: 1;
  color: #015ca1;
  border-color: 1px #015ca1 solid;
  background-color: #b0dfe5;
}

.pending-payment {
  display: none;
}

@media (max-width: 768px) {
  /* CSS */
  .mobile.pending-payment {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin-bottom: 20px;
    cursor: pointer;
  }
}

@media only screen and (min-width: 1024px) {
  .desktop.pending-payment {
    padding: 8px 12px;
    border-radius: 10px;
    cursor: pointer;
    color: #ff0000;
    border: 1px #ff0000 solid;
    background-color: #ffe8ec;

    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
  }
}
</style>
