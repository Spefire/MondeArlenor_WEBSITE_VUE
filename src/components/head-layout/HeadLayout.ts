import { defineComponent } from "vue";

export default defineComponent({
  name: "HeadLayout",
  props: {
    title: {
      type: String,
      required: true
    },
    imageLeft: {
      type: String,
      required: false,
      default: null
    },
    imageRight: {
      type: String,
      required: false,
      default: null
    }
  },

  setup: () => {
    return {};
  },
});
