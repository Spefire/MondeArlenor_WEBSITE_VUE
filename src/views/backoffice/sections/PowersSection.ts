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
    const showPopup = ref(false);
    return { allPowers, canExport, showPopup };
  },

  mounted() {
    this.loadPowers();
  },

  methods: {
    async loadPowers() {
      const allPowers = await api.readAllPower();
      this.allPowers = allPowers.sort((a, b) => a.name.localeCompare(b.name));
    },
    addPower() {
      this.showPopup = true;
    },
    closePower() {
      this.showPopup = false;
    },
    async importPowers(event:any) {
      const files = event.target.files || event.dataTransfer.files;
      if (!files.length)
        return;
      console.log(files[0]);

      const file = files[0];
      if (!file) return;
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
    deletePowers() {
      this.showPopup = true;
    },
  }
});
