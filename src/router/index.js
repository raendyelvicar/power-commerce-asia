import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Transaction from "../views/Transaction.vue";
import PaymentList from "../views/PaymentList.vue";
import HowToPay from "../views/HowToPay.vue";
import ProductCatalog from "../views/ProductCatalog.vue";
import DetailProduct from "../views/DetailProduct.vue";
import Cart from "../views/Cart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Power Commerce Asia - Home',
    }
  },
  {
    path: "/transactions",
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
      title: 'Power Commerce Asia - Product Catalog',
    }
  },
  {
    path: "/products/:id",
    name: "Detail Product",
    component: DetailProduct,
    meta: {
      title: 'Power Commerce Asia - Detail Product',
    }
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: {
      title: 'Power Commerce Asia - Cart',
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
