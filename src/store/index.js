import Vuex from 'vuex';
import Vue from 'vue';
import state from './state';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
    // plugins: [vuexPersist.plugin],
    state,
    // mutations,
    getters,
    // actions

}); 
