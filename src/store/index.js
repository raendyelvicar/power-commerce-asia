import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';
import i18n, { selectedLocale }  from "../i18n";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      locale: selectedLocale,
  },
  mutations: {
    updateLocale(state, newLocale) {
      state.locale = newLocale;
      localStorage.setItem("lang", newLocale);
    }
  },
  actions: {
    changeLocale({ commit }, newLocale) {
      i18n.locale = newLocale
      commit('updateLocale', newLocale)
    }
  },
  getters: {
    getCurrentLocale: (state) => state.locale
  },
  plugins: [createPersistedState()]
});

