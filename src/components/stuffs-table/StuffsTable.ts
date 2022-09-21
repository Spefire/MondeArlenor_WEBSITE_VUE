import { ArlenorStuff, StuffTypesEnum } from "@/models/ArlenorStuff";
import { defineComponent, PropType, Ref, ref } from "vue";

export default defineComponent({
  name: "StuffsTable",
  props: {
    allStuffs: {
      type: Array as PropType<ArlenorStuff[]>,
      required: true
    },
  },
  components: {},
  emits: ["edit", "delete", "update"],

  setup() {
    const selectedStuff: Ref<ArlenorStuff | null> = ref(null);
    const filteredStuffs: Ref<ArlenorStuff[]> = ref([]);
    
    const allTypes = Object.values(StuffTypesEnum);
    const selectedType: Ref<string | null> = ref(null);

    const searchName = ref("");

    return {
      selectedStuff, filteredStuffs,
      allTypes, selectedType,
      searchName
    };
  },
  
  watch: {
    allStuffs: function() {
      this.changeFilteredStuffs();
    }
  },
  
  mounted() {
    this.changeFilteredStuffs();
  },

  methods: {
    changeFilteredStuffs() {
      this.filteredStuffs = this.allStuffs;
      if (this.selectedType) this.filteredStuffs = this.filteredStuffs.filter(stuff => {
        if (stuff.type) return (stuff.type.Code === this.selectedType);
        else return true;
      });
      if (this.searchName) this.filteredStuffs = this.filteredStuffs.filter(stuff => stuff.name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1);
      this.filteredStuffs.sort((a, b) => a.name.localeCompare(b.name));
      this.$emit("update", this.filteredStuffs);
    },

    seeMore(stuff: ArlenorStuff) {
      this.selectedStuff = (this.selectedStuff === stuff) ? null : stuff;
    },

    editStuff(stuff: ArlenorStuff) {
      this.$emit("edit", stuff);
    },
    deleteStuff(stuff: ArlenorStuff) {
      this.$emit("delete", stuff);
    }
  },
});