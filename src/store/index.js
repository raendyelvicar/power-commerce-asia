import axios from "axios";
import Vue from "vue";
import Vuex, { Store } from "vuex";
import createPersistedState from 'vuex-persistedstate';
import i18n, { selectedLocale }  from "../i18n";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      locale: selectedLocale,
      isLoading:true,
      products:[],
      cart:[],
      bin:[],
      modalVisibility: false,
      pagination: {
        totalCount: 0,
        pageSize: 10,
        current: 1,
        totalPage: 0,
        showedItems: [],
      },
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
    },

    setLoadingState(state, newState){
      state.isLoading = newState;
    },

    setPagination(state, data) {
      let paginate = state.pagination;
      paginate.totalCount = data.length;
      paginate.totalPage = Math.ceil(paginate.totalCount / paginate.pageSize);
      if (paginate.totalCount < 10) {
        paginate.showedItems = data.slice(0, paginate.totalCount);
      } else if (paginate.totalCount > 10) {
        let index = paginate.pageSize * (paginate.current - 1);
        if (paginate.current === 1) {
          paginate.showedItems = data.slice(0, paginate.pageSize);
        } else if (paginate.current === paginate.totalPage) {
          paginate.showedItems = data.slice(index);
        } else {
          paginate.showedItems = data.slice(
            index,
            paginate.pageSize * paginate.current
          );
        }
      }
    },
    setCurrentPage(state, page){
      state.pagination.current = page
    },

    setModalVisibility(state, newState){
      state.modalVisibility = newState;
    },

    addToCart(state, product){
      let item = state.cart.find(i => i.id == product.id);
      let currentProduct = state.products.find(p => p.id === product.id);

      if(item){
        item.quantity++;
      } else {
        state.cart.push({...product, quantity:1});
      }

      currentProduct.stock--;
    },

    setQuantityItem(state, { product, opt }){
      let item = state.cart.find(i => i.id === product.id);
      if(item) {
        if(opt === "increase"){
          item.quantity++;
          item.stock--;
        } else if(opt === "decrease"){
          if(item.quantity === 0){
            return;
          }
          item.quantity--;
          item.stock++;
        }
      }
    },

    removeCartItem(state, status){
      let item = state.bin[0];
      
      if(status){
        const indexToRemove = state.cart.findIndex(p => p.id === item.id);
        state.cart.splice(indexToRemove, 1);
      }

      while (state.bin.length) { state.bin.pop(); }

      state.modalVisibility = false;
    },

    addItemToBin(state, product){
      state.bin.push(product);
    }
  },

  actions: {
    changeLocale({ commit }, newLocale) {
      i18n.locale = newLocale
      commit('updateLocale', newLocale)
    },

    async fetchAllProducts({ commit }) {
      try {
        await axios.get("https://626b682ce5274e6664cba68e.mockapi.io/api/v1/products").then(function (response) {
          // handle success
          const data = response.data;
          commit("setProducts", data);
          commit("setPagination", data)
          commit("setLoadingState", false)
        }).catch(function (error) {
          // handle error
          console.log(error);
        })
      } catch (error) {
        return console.error(error);
      }
    },

    async changeImageUrl({commit}, newState){
      try {
        commit('setCurrentImageUrl', newState);
      } catch (error) {
        return console.error(error);
      }
    },

    changeLoadingState({commit}, newState) {
      try {
        commit('setLoadingState', newState);
      } catch (error) {
        return console.error(error);
      }
    },

    changeCurrentPage({commit}, page){
      try {
        commit('setCurrentPage', page);
      } catch (error) {
        return console.error(error)
      }
    },

    showModal({commit}, status){
      try {
        commit('setModalVisibility', status);
      } catch (error) {
        return console.error(error)
      }
    },

    addToCart({commit}, product){
      try {
        commit('addToCart', product);
      } catch (error) {
        return console.error(error);
      }
    },

    removeFromCart({commit}, status){
      try {
        commit('removeCartItem', status);
      } catch (error) {
        return console.error(error);
      } 
    },

    changeQuantityItem({commit}, { product, opt }){
      try {
        commit('setQuantityItem', { product, opt });
      } catch (error) {
        return console.error(error);
      }    
    },

    pushToBin({commit}, product){
      try {
        commit('addItemToBin', product);
        commit('setModalVisibility', true);
       } catch (error) {
        return console.error(error);
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
    cartItemById: state => (id) => {
      return state.cart.find(item => item.id === id);
    },
    currentImageUrl: (state) => {
      return state.currentImageUrl
    },
    dummyData: (state) => {
      return state.dummy
    },
    isLoading: (state)=>{
      return state.isLoading
    },
    pagination:(state) => {
      return state.pagination
    },
    modalVisibility: (state) => {
      return state.modalVisibility
    },
    productQuantity: (state) => (product) => {
      const item = state.cart.find(i => i.id === product.id);

      if(item) return item.quantity
      else return null
    },
    cart: (state) => {
      return state.cart
    }
  },

  plugins: [createPersistedState()]
});

