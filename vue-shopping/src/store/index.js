import Vuex from 'vuex';
import Vue from 'vue';
import basket from './modules/basket';
import notification from './modules/notification';


// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    notification,
    basket
  }
});