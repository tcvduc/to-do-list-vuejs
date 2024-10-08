import KhungSuonToDoList from "./components/KhungSuonToDoList.vue";
import RouterLink from "./components/onboard/VueRouter/RouterLink/RouterLink.vue";
import RouterView from "./components/onboard/VueRouter/RouterView/RouterView.vue";
import MerchantComponent from "./components/MerchantComponent.vue";
const routers = [
  {
    path: "/",
    component: KhungSuonToDoList,
  },
  {
    path: "/home",
    component: KhungSuonToDoList,
  },
  {
    path: "/merchant",
    component: MerchantComponent,
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

export default routers;
