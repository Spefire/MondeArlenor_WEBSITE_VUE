import { defineComponent } from "vue";

export default defineComponent({
  name: "CreationForm",
  props: {
    formTitle: {
      type: String,
      required: true,
      default: null
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false
    },
    isModified: {
      type: Boolean,
      required: false,
      default: false
    },
    isInvalid: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  emits: ["outCancel", "outSubmit"],
    
  data() {
    return {
      needConfirm: false,
    };
  },

  methods: {
    cancel() {
      if (this.isModified && !this.needConfirm) {
        this.needConfirm = true;
      } else {
        this.$emit("outCancel");
      }
    },
    submit() {
      this.$emit("outSubmit");
    },
  }
});
