import Vue from "vue";
import VueRouter from "vue-router";
import Transaction from "../views/Transaction.vue";
import PaymentList from "../views/PaymentList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/transactions",
    name: "Transaction",
    component: Transaction,
  },
  {
    path: "/payment-list",
    name: "PaymentList",
    component: PaymentList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
