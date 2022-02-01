import { defineComponent } from "vue";

export default defineComponent({
  name: "ToggleButton",
  props: {
    text: {
      type: String,
      required: false,
      default: ""
    },
    value: {
      type: Boolean,
      required: true
    },
  },
  emits: ["change"],
  
  setup: () => {
    return {};
  },

  methods: {
    submit(event: Event) {
      const target = (<HTMLInputElement>event.target);
      this.$emit("change", target.checked);
    }
  }
});
