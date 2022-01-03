import { createApp } from "vue";

import App from "./App.vue";
import titleMixin from "./mixins/titleMixin";
import router from "./router";
import store from "./store";

const app = createApp(App)
  .use(store)
  .use(router)
  .mixin(titleMixin);

app.mount("#app");
