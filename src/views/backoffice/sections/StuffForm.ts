import ToggleButton from "@/components/toggle-button/ToggleButton.vue";
import { ArlenorStuff, StuffTypesEnum } from "@/models/ArlenorStuff";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StuffForm",
  props: {
    currentStuff: {
      type: ArlenorStuff,
      required: true
    },
  },
  components: {
    ToggleButton,
  },
  emits: ["submit"],

  data (props) {
    const allTypes = Object.values(StuffTypesEnum);

    return {
      allTypes,
      form: {
        name: props.currentStuff.name,
        description: props.currentStuff.description,
        codeType: props.currentStuff.codeType,
      },
    };
  },

  setup () {
    return { v$: useVuelidate() };
  },

  validations: {
    form: {
      name: {
        required
      },
      description: {},
      codeType: {},
    },
  },

  methods: {
    submitForm() {
      const newStuff = new ArlenorStuff();
      newStuff.id = this.currentStuff.id;
      newStuff.name = this.form.name;
      newStuff.description = this.form.description;
      newStuff.codeType = this.form.codeType;
      this.$emit("submit", newStuff);
    },
  }
});
