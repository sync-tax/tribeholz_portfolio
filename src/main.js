import { createApp } from "vue";
import router from "./router.js";
import "./styles/main.css";
import App from "./App.vue";

import "prismjs/components/prism-ruby.min.js";
import "prismjs/components/prism-python.min.js";

createApp(App).use(router).mount("#app");
