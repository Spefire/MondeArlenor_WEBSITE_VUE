import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Header",
  setup: () => { 
    const route = ref("universe");
    const showSubmenu = ref(false);

    return {
      route,
      showSubmenu
    };
  }
});
