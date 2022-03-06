import { PageTitles } from "@/models/PagesTitles";
import AboutView from "@/views/about/AboutView.vue";
import CelestiaView from "@/views/celestia/CelestiaView.vue";
import HomeView from "@/views/home/HomeView.vue";
import LegacyView from "@/views/legacy/LegacyView.vue";
import CreationView from "@/views/roleplay/creation/CreationView.vue";
import DocumentationView from "@/views/roleplay/documentation/DocumentationView.vue";
import RoleplayView from "@/views/roleplay/RoleplayView.vue";
import SpecialityView from "@/views/roleplay/speciality/SpecialityView.vue";
import SystemView from "@/views/roleplay/system/SystemView.vue";
import MagicView from "@/views/universe/magic/MagicView.vue";
import RacesView from "@/views/universe/races/RacesView.vue";
import ReligionView from "@/views/universe/religion/ReligionView.vue";
import UniverseView from "@/views/universe/UniverseView.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: HomeView, meta: { title: PageTitles.home }},

  { path: "/universe", component: UniverseView, meta: { title: PageTitles.worldmap }},
  { path: "/universe/religion", component: ReligionView, meta: { title: PageTitles.religion }},
  { path: "/universe/magic", component: MagicView, meta: { title: PageTitles.magic }},
  { path: "/universe/races", component: RacesView, meta: { title: PageTitles.races }},

  { path: "/roleplay", component: RoleplayView, meta: { title: PageTitles.roleplay }},
  { path: "/roleplay/system", component: SystemView, meta: { title: PageTitles.system }},
  { path: "/roleplay/documentation", component: DocumentationView, meta: { title: PageTitles.documentation }},
  { path: "/roleplay/speciality", component: SpecialityView, meta: { title: PageTitles.speciality }},
  { path: "/roleplay/creation", component: CreationView, meta: { title: PageTitles.creation }},

  { path: "/celestia", component: CelestiaView, meta: { title: PageTitles.celestia }},

  { path: "/legacy", component: LegacyView, meta: { title: PageTitles.legacy }},
  { path: "/about", component: AboutView, meta: { title: PageTitles.about }},
  { path: "/*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scrollBehavior(_to, _from, savedPosition): any {
    if (savedPosition) {
      return savedPosition;
    }
    if (_to.hash) {
      return { el: _to.hash, behavior: "smooth" };
    } else {
      window.scrollTo(0, 0);
    }
  },
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
