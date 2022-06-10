import Vue from "vue";
import VueRouter from "vue-router";
import Transaction from "../views/Transaction.vue";
import PaymentList from "../views/PaymentList.vue";
import HowToPay from "../views/HowToPay.vue";
import ProductCatalog from "../views/ProductCatalog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Transactions",
    component: Transaction,
    meta: {
      title: 'Power Commerce Asia - Transactions',
    }
  },
  {
    path: "/payment-list",
    name: "Paymen List",
    component: PaymentList,
  },
  {
    path: "/how-to-pay",
    name: "How To Pay",
    component: HowToPay,
    meta: {
      title: 'Power Commerce Asia - How To Pay',
    }
  },
  {
    path: "/catalog",
    name: "Product Catalog",
    component: ProductCatalog,
    meta: {
      title: 'Power Commerce Asia - How To Pay',
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  document.title = `${ process.env.VUE_APP_TITLE } - ${to.name}`;
  next();
})
export default router;
