import { defineComponent } from "vue";

export default defineComponent({
  name: "ArrowButton",
  props: {
    linkPage: {
      type: String,
      required: false,
      default: null
    },
    linkName: {
      type: String,
      required: false,
      default: null
    },
    linkQuery: {
      type: Object,
      required: false,
      default: null
    },
  },
  setup: () => {
    return {};
  },
});
