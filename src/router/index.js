import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layouts/Layout.vue";
import Home from "../pages/home/Home.vue";
import NotFound from "../pages/notFound/NotFound.vue";
import Wallets from "../pages/wallets/Wallets.vue";
import Summary from "../pages/summary/Summary.vue";
import Accounts from "../pages/accounts/Accounts.vue";
import Settings from "../pages/settings/Settings.vue";
import Expenses from "../pages/expenses/Expenses.vue";


const routes = [
  {
    path: "/",
    component: Layout,

    children: [
      //pages
      {
        path: "/",
        name: "dashboard",
        component: Home,
      },
      {
        path: "/expenses",
        name: "expenses",
        component: Expenses,
      },
      {
        path: "/wallets",
        name: "wallets",
        component: Wallets,
      },
      {
        path: "/summary",
        name: "summary",
        component: Summary,
      },
      {
        path: "/accounts",
        name: "accounts",
        component: Accounts,
      },
      {
        path: "/settings",
        name: "settings",
        component: Settings,
      },
    ],
  },

  {
    path: "/:notFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
});



export default router;
