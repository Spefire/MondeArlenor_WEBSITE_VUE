import AboutView from "@/views/about/AboutView.vue";
import CelestiaView from "@/views/celestia/CelestiaView.vue";
import HomeView from "@/views/home/HomeView.vue";
import LegacyView from "@/views/legacy/LegacyView.vue";
import CreationView from "@/views/roleplay/CreationView.vue";
import DocsView from "@/views/roleplay/DocsView.vue";
import RoleplayView from "@/views/roleplay/RoleplayView.vue";
import CrystalsView from "@/views/universe/CrystalsView.vue";
import PopulationView from "@/views/universe/PopulationView.vue";
import ReligionView from "@/views/universe/ReligionView.vue";
import UniverseView from "@/views/universe/UniverseView.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: HomeView },

  { path: "/universe", component: UniverseView },
  { path: "/universe/crystals", component: CrystalsView },
  { path: "/universe/religion", component: ReligionView },
  { path: "/universe/population", component: PopulationView },

  { path: "/roleplay", component: RoleplayView },
  { path: "/roleplay/creation", component: CreationView },
  { path: "/roleplay/docs", component: DocsView },

  { path: "/celestia", component: CelestiaView },

  { path: "/legacy", component: LegacyView },
  { path: "/about", component: AboutView },
  { path: "/*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.afterEach((to, from) => {
  if (to.path === "/") {
    const app = document.getElementById("app");
    if (app) app.classList.remove("without-height");
  } else if (from.path === "/"){
    const app = document.getElementById("app");
    if (app) app.classList.add("without-height");
  }
});

export default router;
