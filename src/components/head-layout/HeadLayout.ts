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
      required: true
    },
    imageRight: {
      type: String,
      required: true
    }
  },

  setup: () => {
    return {};
  },
});
