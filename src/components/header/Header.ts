import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Header",
  setup: () => { 
    const showSubmenu = ref(false);

    return {
      showSubmenu
    };
  },
  computed: {
    onUniverseRoute() {
      return this.$route.path.includes("/universe");
    }
  },
  methods: {
    toggleList() {
      this.showSubmenu = !this.showSubmenu;
    }
  }
});
