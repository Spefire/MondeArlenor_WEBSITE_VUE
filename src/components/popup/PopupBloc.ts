import { defineComponent } from "vue";

export default defineComponent({
  name: "PopupBloc",
  props: {
    blocTitle: {
      type: String,
      required: true,
      default: null
    },
  },
  emits: ["close"],
  
  setup: () => {
    return {};
  },

  methods: {
    closePopup() {
      this.$emit("close");
    }
  }
});
