import Vuex from 'vuex';
import Vue from 'vue';
import basket from './modules/basket';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    basket
  }
});