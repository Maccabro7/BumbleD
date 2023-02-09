import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServicesView from "../views/ServicesView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ContactUsView from "../views/ContactUsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PortfolioView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactUsView,
    },
  ],
});

export default router;
