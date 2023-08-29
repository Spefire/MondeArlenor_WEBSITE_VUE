import { ArlenorCharacter } from "@/models/ArlenorCharacter";
import useVuelidate from "@vuelidate/core";
import { maxLength, required } from "@vuelidate/validators";
import { defineComponent } from "vue";
import { useStore } from "vuex";

import CreationForm from "../form/CreationForm.vue";

export default defineComponent({
  name: "IdentityForm",
  components: { CreationForm },
  emits: ["previousStep", "nextStep"],

  data () {
    const store = useStore();
    return {
      store,
      form: {
        avatar: store.state.character.avatar,
        name: store.state.character.name,
        age: store.state.character.age,
        gender: store.state.character.gender,
        story: store.state.character.story,
        description: store.state.character.description,
        traits: store.state.character.traits,
        belives: store.state.character.belives,
        importances: store.state.character.importances,
      },
      isModified: false,
    };
  },

  setup () {
    return { v$: useVuelidate() };
  },

  validations: {
    form: {
      name: {
        required,
        max: maxLength(40)
      },
      age: {},
      gender: {},
      story: {
        max: maxLength(800)
      },
      description: {
        max: maxLength(70)
      },
      traits: {
        max: maxLength(70)
      },
      belives: {
        max: maxLength(70)
      },
      importances: {
        max: maxLength(70)
      },
    },
  },

  methods: {
    changeAvatar(event: Event) {
      const target = (<HTMLInputElement>event.target);
      const file = (target && target.files) ? target.files[0] : null;
      if (!file) return;
      if (file.size > 2000000) {
        alert("Warning (Max size : 2 Mo)");
      } else {
        let image64: string;
        const promiseGetImage64 = new Promise(function (resolve) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function () {
            image64 = reader.result as string;
            return resolve(true);
          };
          reader.onerror = function (error) {
            console.log(error);
          };
        });
        Promise.all([promiseGetImage64]).then(() => {
          this.form.avatar = image64;
        });
      }
    },
    updateForm() {
      this.isModified = true;
    },
    cancelForm() {
      this.isModified = false;
      this.$emit("previousStep");
    },
    submitForm() {
      this.save();
      this.isModified = false;
      this.$emit("nextStep");
    },
    save() {
      const newCharacter = new ArlenorCharacter();
      newCharacter.avatar = this.form.avatar;
      newCharacter.name = this.form.name;
      newCharacter.age = this.form.age;
      newCharacter.gender = this.form.gender;
      newCharacter.story = this.form.story;
      newCharacter.description = this.form.description;
      newCharacter.traits = this.form.traits;
      newCharacter.belives = this.form.belives;
      newCharacter.importances = this.form.importances;
      this.store.commit("changeCharacterIdentity", newCharacter);
    }
  }
});
