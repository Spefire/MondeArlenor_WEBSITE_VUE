import PopupBloc from "@/components/popup/PopupBloc.vue";
import StuffsTable from "@/components/stuffs-table/StuffsTable.vue";
import { ArlenorStuff } from "@/models/ArlenorStuff";
import api from "@/utils/api";
import { defineComponent, Ref, ref } from "vue";
import { useStore } from "vuex";

import StuffForm from "./StuffForm.vue";

export default defineComponent({
  name: "StuffsSection",
  components: {
    StuffForm,
    StuffsTable,
    PopupBloc,
  },
    
  setup() {
    const store = useStore();
    const filteredStuffs: Ref<ArlenorStuff[]> = ref([]);
    const currentStuff: Ref<ArlenorStuff | null> = ref(null);
    const canExport = ref(true);
    const showAddPopup = ref(false);
    const showEditPopup = ref(false);
    const showDeletePopup = ref(false);
    return {
      store,
      filteredStuffs, currentStuff, canExport,
      showAddPopup, showEditPopup, showDeletePopup
    };
  },

  mounted() {
    this.store.commit("loadAllStuffs", true);
  },

  computed: {
    allStuffs(): ArlenorStuff[] {
      return this.store.state.allStuffs || [];
    },
  },

  methods: {
    updateFilteredStuffs(stuffs: ArlenorStuff[]) {
      this.filteredStuffs = stuffs;
    },
    openAddStuff() {
      this.showAddPopup = true;
      this.currentStuff = new ArlenorStuff();
    },
    async closeAddStuff(stuff: ArlenorStuff | boolean) {
      this.showAddPopup = false;
      if (typeof stuff === "object") {
        const newStuff = stuff as ArlenorStuff;
        const result = await api.sendStuff(newStuff);
        const resultSplit = result.split(" ");
        const id = resultSplit[resultSplit.length-1];
        newStuff.id = id;

        // On recharge le store
        const newStuffs = this.allStuffs.slice();
        newStuffs.push(newStuff);
        this.store.commit("changeAllStuffs", newStuffs);
      }
      this.currentStuff = null;
    },
    openEditStuff(stuff: ArlenorStuff) {
      this.showEditPopup = true;
      this.currentStuff = stuff;
    },
    async closeEditStuff(stuff: ArlenorStuff | boolean) {
      this.showEditPopup = false;
      if (typeof stuff === "object") {
        const newStuff = stuff as ArlenorStuff;
        await api.updateStuff(newStuff);

        // On recharge le store
        const newStuffs = this.allStuffs.slice();
        const index = newStuffs.findIndex(pow => pow.id === newStuff.id);
        newStuffs[index] = newStuff;
        this.store.commit("changeAllStuffs", newStuffs);
      }
      this.currentStuff = null;
    },
    openDeleteStuff(stuff: ArlenorStuff) {
      this.showDeletePopup = true;
      this.currentStuff = stuff;
    },
    async closeDeleteStuff(withAction: boolean) {
      this.showDeletePopup = false;
      if (withAction && this.currentStuff) {
        await api.deleteStuff(this.currentStuff);

        // On recharge le store
        const newStuffs = this.allStuffs.slice().filter(stuff => stuff.id !== this.currentStuff?.id);
        this.store.commit("changeAllStuffs", newStuffs);
      }
      this.currentStuff = null;
    },
  }
});
