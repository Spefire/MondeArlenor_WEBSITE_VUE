import { defineComponent } from "vue";

export default defineComponent({
  name: "Glyphe",
  props: {
    icon: {
      type: String,
      required: true
    },
  },
  setup: () => {
    return {};
  },
  methods: {
    image(id: number): string{
      return require("./../../assets/images/glyphes/" + this.icon + "_0" + id + ".png");
    },
  }
});
