import { getListSpecialities } from "@/models/data/ListSpecialities";
import { PageTitles } from "@/models/PagesTitles";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "BackofficeView",
  title: PageTitles.backoffice,
  components: {},
  
  setup() {
    const allSpecialities = ref(getListSpecialities());
    return { allSpecialities };
  },

  methods: {}
});
