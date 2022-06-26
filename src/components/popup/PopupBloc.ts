import { defineComponent } from "vue";

export default defineComponent({
  name: "PopupBloc",
  props: {
    blocTitle: {
      type: String,
      required: true,
      default: null
    },
    hasConfirmButton: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  emits: ["close"],
  
  setup: () => {
    return {};
  },

  methods: {
    closePopup(value: boolean) {
      this.$emit("close", value);
    }
  }
});
