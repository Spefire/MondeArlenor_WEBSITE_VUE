import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterLink",
  props: {
    link: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      required: true
    },
    withBorder: {
      type: Boolean,
      default: false
    },
  },
  setup: () => {
    return {};
  },
});
