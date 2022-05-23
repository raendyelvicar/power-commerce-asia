import Vue from "vue";
import VueRouter from "vue-router";
import Transaction from "../views/Transaction.vue";
import PaymentList from "../views/PaymentList.vue";
import HowToPay from "../views/HowToPay.vue";
import i18n from "../i18n"

Vue.use(VueRouter);

const routes = [
 {
  path:'/',
  redirect:`/${i18n.locale}`
 },
 {
   path:'/:lang',
   component: {
     render(h) {
       return h('router-view')
     },
   },
   children: [
    {
      path: "/",
      name: "Transactions",
      component: Transaction,
      meta: {
        title: 'Power Commerce Asia - Transactions',
      }
    },
    {
      path: "payment-list",
      name: "Paymen List",
      component: PaymentList,
    },
    {
      path: "how-to-pay",
      name: "How To Pay",
      component: HowToPay,
      meta: {
        title: 'Power Commerce Asia - How To Pay',
      }
    },
   ]
 }
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
