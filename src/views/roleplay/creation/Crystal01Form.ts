import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Crystal01Form",
  components: {},
  emits: ["nextStep"],
  
  setup() {
    const store = useStore();

    return { store };
  },

  methods: {
    submitForm() {
      this.$emit("nextStep");
    }
  }
});
