/* eslint-disable @typescript-eslint/no-explicit-any */
import PopupBloc from "@/components/popup/PopupBloc.vue";
import PowersTable from "@/components/powers-table/PowersTable.vue";
import { ArlenorPower } from "@/models/ArlenorPower";
import api from "@/utils/api";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "PowersSection",
  components: {
    PowersTable,
    PopupBloc,
  },
    
  setup() {
    const allPowers: Ref<ArlenorPower[]> = ref([]);
    const canExport = ref(true);
    const showAddPopup = ref(false);
    const showEditPopup = ref(false);
    const showDeletePopup = ref(false);
    const showDeleteAllPopup = ref(false);
    return {
      allPowers, canExport,
      showAddPopup, showEditPopup, showDeletePopup, showDeleteAllPopup
    };
  },

  mounted() {
    this.loadPowers();
  },

  methods: {
    async loadPowers() {
      const allPowers = await api.readAllPower();
      this.allPowers = allPowers.sort((a, b) => a.name.localeCompare(b.name));
    },
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
        Promise.all([promiseGetParameters]).then(() => {

          const finalResults: ArlenorPower[] = [];
          parameters.forEach((obj: any) => {
            const power = new ArlenorPower();
            power.initByJSON(JSON.stringify(obj));
            finalResults.push(power);
          });

          alert("Importation des pouvoirs réussie.");

          this.allPowers = this.allPowers.concat(finalResults);
        });
      }
    },
    async exportPowers() {
      if (!this.canExport) {
        this.canExport = true;
        return;
      }
      const allPowers = await api.readAllPower();
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(allPowers));
      const dlAnchorElem = document.getElementById("export-powers-json");
      if (dlAnchorElem) {
        dlAnchorElem.setAttribute("href", dataStr);
        dlAnchorElem.setAttribute("download", "powers.json");
        dlAnchorElem.click();
        this.canExport = false;
      }
    },
    openAddPower() {
      this.showAddPopup = true;
    },
    closeAddPower(withAction: boolean) {
      this.showAddPopup = false;
      if (withAction) console.log("closeAddPower");
    },
    openEditPower() {
      this.showEditPopup = true;
    },
    closeEditPower(withAction: boolean) {
      this.showEditPopup = false;
      if (withAction) console.log("closeEditPower");
    },
    openDeletePower() {
      this.showDeletePopup = true;
    },
    closeDeletePower(withAction: boolean) {
      this.showDeletePopup = false;
      if (withAction) console.log("closeDeletePower");
    },
    openDeleteAllPowers() {
      this.showDeleteAllPopup = true;
    },
    closeDeleteAllPowers(withAction: boolean) {
      this.showDeleteAllPopup = false;
      if (withAction) console.log("closeDeleteAllPowers");
    },
  }
});
