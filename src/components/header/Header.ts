import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Header",
  setup: () => { 
    const showSubmenu = ref(false);
    const pages = ref(PageTitles);

    return {
      showSubmenu,
      pages
    };
  },
  computed: {
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
