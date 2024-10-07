import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routers from "./routers";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routers: Routers,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
