import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";

const store = createStore({
  state: {
    token: "",
    myAnimes: []
  },
  mutations: {
    updateToken(state, payload) {
      state.token = payload
    },
    updateMyAnimes(state, payload) {
      state.myAnimes = [...state.myAnimes, payload];
    }
  },
  actions: {
    addToken(context, payload) {
      const token = payload;
      context.commit('updateToken', token);
    },
    addAnimeToMyAnimes(context, payload) {
      context.commit('updateMyAnimes', payload);
    }
  },
  getters: {
    getToken: function (state) { return state.token }
 }
});

createApp(App).use(store).use(router).mount("#app");
