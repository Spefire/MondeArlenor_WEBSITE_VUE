import { defineComponent } from "vue";

export default defineComponent({
  name: "ExpandBloc",
  props: {
    blocState: {
      type: Boolean,
      required: false,
      default: null
    },
    blocTitle: {
      type: String,
      required: false,
      default: null
    },
  },
  emits: ["toggle"],
  
  setup: () => {
    return {};
  },

  methods: {
    toggleState() {
      this.$emit("toggle");
    }
  }
});
