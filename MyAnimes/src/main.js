import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";

const store = createStore({
  state: {
    token: "",
    email: "",
    myAnimes: []
  },
  mutations: {
    updateToken(state, payload) {
      state.token = payload
    },
    updateMyAnimes(state, payload) {
      state.myAnimes = [...state.myAnimes, payload];
    },
    updateEmail(state, payload) {
      state.email = payload
    }
  },
  actions: {
    addToken(context, payload) {
      const token = payload;
      context.commit('updateToken', token);
    },
    addAnimeToMyAnimes(context, payload) {
      context.commit('updateMyAnimes', payload);
    },
    addEmail(context, payload) {
      const email = payload;
      context.commit('updateEmail', email);
    }
  },
  getters: {
    getToken: function (state) { return state.token },
    getEmail: function (state) { return state.email }
 }
});

createApp(App).use(store).use(router).mount("#app");
