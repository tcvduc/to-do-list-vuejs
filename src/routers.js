import KhungSuonToDoList from "./components/KhungSuonToDoList.vue";
import WebPageHome from "./components/WebPageHome.vue";
import RouterLink from "./components/onboard/VueRouter/RouterLink/RouterLink.vue";
import RouterView from "./components/onboard/VueRouter/RouterView/RouterView.vue";

const routers = [
  {
    path: "/",
    component: KhungSuonToDoList,
  },
  {
    path: "/home",
    component: WebPageHome,
  },
  {
    path: "/onboard/routerLink",
    component: RouterLink,
  },
  {
    path: "/onboard/routerView",
    component: RouterView,
  },
];

export default {
  routes: routers,
};
