import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Header",
  setup: () => { 
    const store = useStore();
    const showHeader = ref(true);
    const showSubmenu = ref(false);
    const pages = ref(PageTitles);

    return {
      store,
      showHeader,
      showSubmenu,
      pages
    };
  },
  computed: {
    isAdmin() {
      return this.store.state.isAdmin;
    },
    onUniverseRoute() {
      return this.$route.path.includes("/universe");
    },
    onRoleplayRoute() {
      return this.$route.path.includes("/roleplay");
    },
    onCelestiaRoute() {
      return this.$route.path.includes("/celestia");
    }
  },
  methods: {
    toggleList() {
      this.showSubmenu = !this.showSubmenu;
    }
  }
});
