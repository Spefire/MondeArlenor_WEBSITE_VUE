import { ArlenorCharacter } from "@/models/Character";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "IdentityForm",
  components: {},

  setup() {
    const store = useStore();
    const avatar = ref(store.state.character.avatar);
    const name = ref(store.state.character.name);
    const description = ref(store.state.character.description);

    return { avatar, name, description, store };
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
          this.avatar = image64;
        });
      }
    },

    submitForm() {
      const newCharacter = new ArlenorCharacter();
      newCharacter.name = this.name;
      newCharacter.description = this.description;
      newCharacter.avatar = this.avatar;
      this.store.commit("changeCharacterIdentity", newCharacter);
    }
  }
});
