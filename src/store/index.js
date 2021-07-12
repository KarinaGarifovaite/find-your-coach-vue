import Vue from 'vue';
import Vuex from 'vuex';
import coachesModule from './modules/coaches/index';
import requestsModule from './modules/requests/index';
import authModule from './modules/auth/index';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: {},
  actions: {},
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule,
  },
});
