import Vue from "vue";
import Antd from "ant-design-vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import "@/assets/css/main.css";
import i18n from './i18n'

Vue.config.productionTip = false;

Vue.use(Antd);

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.

  let language = to.params.lang;
  if(!language){
    language = 'en'
  }

  i18n.locale = language;
  next();

})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
