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
    const selectedPower: Ref<ArlenorPower | null> = ref(null);
    const canExport = ref(true);
    const showAddPopup = ref(false);
    const showEditPopup = ref(false);
    const showDeletePopup = ref(false);
    return {
      allPowers, selectedPower, canExport,
      showAddPopup, showEditPopup, showDeletePopup
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
        Promise.all([promiseGetParameters]).then(async() => {

          const finalResults: ArlenorPower[] = [];
          parameters.forEach((obj: any) => {
            const power = new ArlenorPower();
            power.initByJSON(JSON.stringify(obj));
            finalResults.push(power);
          });

          alert("Importation des pouvoirs réussie.");

          await api.sendAllPower(finalResults);
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
      this.selectedPower = new ArlenorPower();
    },
    closeAddPower(withAction: boolean) {
      this.showAddPopup = false;
      if (withAction) console.log("closeAddPower");
      this.selectedPower = null;
    },
    openEditPower(power: ArlenorPower) {
      console.warn(power);
      this.showEditPopup = true;
      this.selectedPower = power;
    },
    closeEditPower(withAction: boolean) {
      this.showEditPopup = false;
      if (withAction) console.log("closeEditPower");
      this.selectedPower = null;
    },
    openDeletePower(power: ArlenorPower) {
      this.showDeletePopup = true;
      this.selectedPower = power;
    },
    async closeDeletePower(withAction: boolean) {
      this.showDeletePopup = false;
      if (withAction && this.selectedPower) {
        await api.deletePower(this.selectedPower);
        this.allPowers = this.allPowers.filter(power => power.id !== this.selectedPower?.id);
      }
      this.selectedPower = null;
    },
  }
});
