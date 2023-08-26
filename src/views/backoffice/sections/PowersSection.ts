/* eslint-disable @typescript-eslint/no-explicit-any */
import PopupBloc from "@/components/popup/PopupBloc.vue";
import PowersTable from "@/components/powers-table/PowersTable.vue";
import { ArlenorPower } from "@/models/ArlenorPower";
import supabase_api from "@/utils/supabase_api";
import { defineComponent, Ref, ref } from "vue";
import { useStore } from "vuex";

import PowerForm from "./PowerForm.vue";

export default defineComponent({
  name: "PowersSection",
  components: {
    PowerForm,
    PowersTable,
    PopupBloc,
  },
    
  setup() {
    const store = useStore();
    const filteredPowers: Ref<ArlenorPower[]> = ref([]);
    const currentPower: Ref<ArlenorPower | null> = ref(null);
    const canExport = ref(true);
    const showAddPopup = ref(false);
    const showEditPopup = ref(false);
    const showDeletePopup = ref(false);
    return {
      store,
      filteredPowers, currentPower, canExport,
      showAddPopup, showEditPopup, showDeletePopup
    };
  },

  mounted() {
    this.store.commit("loadAllPowers", true);
  },

  computed: {
    allPowers(): ArlenorPower[] {
      return this.store.state.allPowers || [];
    },
  },

  methods: {
    async importPowers(event:any) {
      const files = event.target.files || event.dataTransfer.files;
      if (!files.length) return;
      const file = files[0];
      if (file.size > 1000000) {
        alert("Warning (Max size : 1 Mo)");
      } else {
        let parameters: any;
        const promiseGetParameters = new Promise(function (resolve) {
          const reader = new FileReader();
          reader.readAsText(file);
          reader.onload = function () {
            if (reader.result) parameters = JSON.parse(reader.result.toString());
            return resolve(true);
          };
          reader.onerror = function (error) {
            console.log(error);
          };
        });
        Promise.all([promiseGetParameters]).then(async() => {

          const finalResults: ArlenorPower[] = [];
          /*parameters.forEach((obj: any) => {
            const power = new ArlenorPower();
            power.initByJSON(JSON.stringify(obj));
            finalResults.push(power);
          });*/

          console.log("postAllPower", parameters);
          await supabase_api.postAllPower(finalResults);
          alert("Importation des pouvoirs réussie.");

          this.store.commit("loadAllPowers", true);
        });
      }
    },
    async exportPowers() {
      if (!this.canExport) {
        this.canExport = true;
        return;
      }
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.filteredPowers));
      const dlAnchorElem = document.getElementById("export-powers-json");
      if (dlAnchorElem) {
        dlAnchorElem.setAttribute("href", dataStr);
        dlAnchorElem.setAttribute("download", "powers.json");
        dlAnchorElem.click();
        this.canExport = false;
      }
    },
    updateFilteredPowers(powers: ArlenorPower[]) {
      this.filteredPowers = powers;
    },
    openAddPower() {
      this.showAddPopup = true;
      this.currentPower = new ArlenorPower();
    },
    async closeAddPower(power: ArlenorPower | boolean) {
      this.showAddPopup = false;
      if (power instanceof ArlenorPower) {
        power.id = await supabase_api.postPower(power);
        
        // On recharge le store
        const newPowers = this.allPowers.slice();
        newPowers.push(power);
        this.store.commit("changeAllPowers", newPowers);
      }
      this.currentPower = null;
    },
    openEditPower(power: ArlenorPower) {
      this.showEditPopup = true;
      this.currentPower = power;
    },
    async closeEditPower(power: ArlenorPower | boolean) {
      this.showEditPopup = false;
      if (power instanceof ArlenorPower) {
        await supabase_api.putPower(power);

        // On recharge le store
        const newPowers = this.allPowers.slice();
        const index = newPowers.findIndex(pow => pow.id === power.id);
        newPowers[index] = power;
        this.store.commit("changeAllPowers", newPowers);
      }
      this.currentPower = null;
    },
    openDeletePower(power: ArlenorPower) {
      this.showDeletePopup = true;
      this.currentPower = power;
    },
    async closeDeletePower(withAction: boolean) {
      this.showDeletePopup = false;
      if (withAction && this.currentPower) {
        await supabase_api.deletePower(this.currentPower);

        // On recharge le store
        const newPowers = this.allPowers.slice().filter(power => power.id !== this.currentPower?.id);
        this.store.commit("changeAllPowers", newPowers);
      }
      this.currentPower = null;
    },
  }
});
