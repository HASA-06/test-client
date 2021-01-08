import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: undefined,
  },
  mutations: {
    setAuth(state, tokenDatas) {
      state.auth = tokenDatas;
    },
  },
  actions: {
    async onBeforeReload({ commit }, tokenDatas: any) {
      const accessToken = tokenDatas.accessToken;
      const refreshToken = tokenDatas.refreshToken;

      if(accessToken && refreshToken) {
        try {
          commit("setAuth", tokenDatas);
        } catch (error) {
          console.log(error.response.data.message);
        }  
      }
    }
  },
  modules: {
  },
});
