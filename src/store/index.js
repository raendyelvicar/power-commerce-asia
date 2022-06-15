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
      dummy: [
        {
          id: 1,
          imgUrl: require("@/assets/images/products/iphone_1.jpg"),
        },
        {
          id: 2,
          imgUrl: require("@/assets/images/products/iphone_2.jpg"),
        },
        {
          id: 3,
          imgUrl: require("@/assets/images/products/iphone_3.jpg"),
        },
        {
          id: 4,
          imgUrl: require("@/assets/images/products/iphone_4.jpg"),
        },
        {
          id: 5,
          imgUrl: require("@/assets/images/products/iphone_5.jpg"),
        },
        {
          id: 6,
          imgUrl: require("@/assets/images/products/iphone_6.jpg"),
        },
      ],
      currentImageUrl: require("@/assets/images/products/iphone_1.jpg"),
  },

  mutations: {
    updateLocale(state, newLocale) {
      state.locale = newLocale;
      localStorage.setItem("lang", newLocale);
    },
    setProducts(state, data){
      state.products = data;
    },
    setCurrentImageUrl(state, newState){
      state.currentImageUrl = newState;
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
        commit("setProducts", data);
      } catch (err) {
        return console.error(err);
      }
    },
    async changeImageUrl({commit}, newState){
      try {
        commit('setCurrentImageUrl', newState);
      } catch (error) {
        return console.error(err);
      }
    }

  },

  getters: {
    getCurrentLocale: (state) => state.locale,
    products: (state) => {
      return state.products
    },
    productById: (state) => (id) => {
      return state.products.find(product => product.id === id)
    },
    currentImageUrl: (state) => {
      return state.currentImageUrl
    },
    dummyData: (state) => {
      return state.dummy
    }
  },

  plugins: [createPersistedState()]
});

