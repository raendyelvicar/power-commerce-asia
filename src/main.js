import Vue from "vue";
import Antd from "ant-design-vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import "@/assets/css/main.css";
import i18n from './i18n'
import InfiniteLoading from 'vue-infinite-loading';
import DefaultLayout from './layouts/Default.vue';

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(InfiniteLoading);
Vue.component('Layout', DefaultLayout)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
