import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Header",
  setup: () => { 
    const showHeader = ref(true);
    const showSubmenu = ref(false);
    const pages = ref(PageTitles);

    return {
      showHeader,
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
    }
  },
  methods: {
    toggleHeader() {
      this.showHeader = !this.showHeader;
    },
    toggleList() {
      this.showSubmenu = !this.showSubmenu;
    }
  }
});
