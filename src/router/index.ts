import { PageTitles } from "@/models/PagesTitles";
import AboutView from "@/views/about/AboutView.vue";
import BackofficeView from "@/views/backoffice/BackofficeView.vue";
import CelestiaView from "@/views/celestia/CelestiaView.vue";
import CercleView from "@/views/celestia/cercle/CercleView.vue";
import ChronologieView from "@/views/celestia/chronologie/ChronologieView.vue";
import HomeView from "@/views/home/HomeView.vue";
import LegacyView from "@/views/legacy/LegacyView.vue";
import CreationView from "@/views/roleplay/creation/CreationView.vue";
import CrystalsView from "@/views/roleplay/crystals/CrystalsView.vue";
import RoleplayView from "@/views/roleplay/RoleplayView.vue";
import SystemView from "@/views/roleplay/system/SystemView.vue";
import CalendrierView from "@/views/universe/calendrier/CalendrierView.vue";
import FactionsView from "@/views/universe/factions/FactionsView.vue";
import MagicView from "@/views/universe/magic/MagicView.vue";
import RacesView from "@/views/universe/races/RacesView.vue";
import ReligionView from "@/views/universe/religion/ReligionView.vue";
import UniverseView from "@/views/universe/UniverseView.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "home", component: HomeView, meta: { title: PageTitles.home }},

  { path: "/universe", name: "universe", component: UniverseView, meta: { title: PageTitles.worldmap }},
  { path: "/universe/calendrier", name: "calendrier", component: CalendrierView, meta: { title: PageTitles.calendrier }},
  { path: "/universe/religion", name: "religion", component: ReligionView, meta: { title: PageTitles.religion }},
  { path: "/universe/magic", name: "magic", component: MagicView, meta: { title: PageTitles.magic }},
  { path: "/universe/races", name: "races", component: RacesView, meta: { title: PageTitles.races }},
  { path: "/universe/factions", name: "factions", component: FactionsView, meta: { title: PageTitles.factions }},

  { path: "/roleplay", name: "roleplay", component: RoleplayView, meta: { title: PageTitles.roleplay }},
  { path: "/roleplay/system", name: "system", component: SystemView, meta: { title: PageTitles.system }},
  { path: "/roleplay/crystals", name: "crystals", component: CrystalsView, meta: { title: PageTitles.crystals }},
  { path: "/roleplay/creation", name: "creation", component: CreationView, meta: { title: PageTitles.creation }},

  { path: "/celestia", name: "celestia", component: CelestiaView, meta: { title: PageTitles.celestia }},
  { path: "/celestia/chronologie", name: "chronologie", component: ChronologieView, meta: { title: PageTitles.chronologie }},
  { path: "/celestia/cercle", name: "cercle", component: CercleView, meta: { title: PageTitles.cercle }},

  { path: "/backoffice", name: "backoffice", component: BackofficeView, meta: { title: PageTitles.backoffice }},
  { path: "/legacy", name: "legacy", component: LegacyView, meta: { title: PageTitles.legacy }},
  { path: "/about", name: "about", component: AboutView, meta: { title: PageTitles.about }},
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
    } else if (_to.path !== _from.path) {
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
