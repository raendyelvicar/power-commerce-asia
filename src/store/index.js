import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';
import i18n, { selectedLocale }  from "../i18n";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      locale: selectedLocale,
      products:[],
  },

  mutations: {
    updateLocale(state, newLocale) {
      state.locale = newLocale;
      localStorage.setItem("lang", newLocale);
    },
    setProducts(state, data){
      state.products = data;
    }
  },

  actions: {
    changeLocale({ commit }, newLocale) {
      i18n.locale = newLocale
      commit('updateLocale', newLocale)
    },
    async fetchAllProducts({ commit }) {
      try {
        const response = await axios.get("https://626b682ce5274e6664cba68e.mockapi.io/api/v1/products");
        const data = response.data;
        console.log(data);
        commit("setProducts", data);
      } catch (err) {
        return console.error(err);
      }
    },
  },

  getters: {
    getCurrentLocale: (state) => state.locale,
    products: (state) => {
      return state.products
    },
    productById: (state) => (id) => {
      return state.products.find(product => product.id === id)
    }
  },

  plugins: [createPersistedState()]
});

