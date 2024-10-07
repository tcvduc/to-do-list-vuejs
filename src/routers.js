import KhungSuonToDoList from "./components/KhungSuonToDoList.vue";
import WebPageHome from "./components/WebPageHome.vue";

const routers = [
  {
    path: "/",
    component: KhungSuonToDoList,
  },
  {
    path: "/home",
    component: WebPageHome,
  },
];

export default {
  routes: routers,
};
