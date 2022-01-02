import { defineComponent } from "vue";

export default defineComponent({
  name: "ArrowButton",
  props: {
    linkPage: {
      type: String,
      required: true
    },
  },
  setup: () => {
    return {};
  },
});
