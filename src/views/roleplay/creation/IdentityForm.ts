import { ArlenorCharacter } from "@/models/Character";
import useVuelidate from "@vuelidate/core";
import { maxLength, required } from "@vuelidate/validators";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "IdentityForm",
  components: {},

  data () {
    const store = useStore();
    return {
      store,
      form: {
        avatar: store.state.character.avatar,
        name: store.state.character.name,
        description: store.state.character.description,
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
        required
      },
      description: {
        required,
        max: maxLength(440)
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

    update () {
      this.isModified = true;
    },

    submitForm() {
      const newCharacter = new ArlenorCharacter();
      newCharacter.name = this.form.name;
      newCharacter.description = this.form.description;
      newCharacter.avatar = this.form.avatar;
      this.store.commit("changeCharacterIdentity", newCharacter);
      this.isModified = false;
    }
  }
});
