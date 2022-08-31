import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "tw-elements";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faPowerOff,
  faSun,
  faMoon,
  faEnvelope,
  faHouseChimney,
  faBuildingColumns,
  faCircleArrowDown,
  faCircleArrowUp,
  faUserPen,
  faBars,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faPowerOff,
  faSun,
  faMoon,
  faEnvelope,
  faHouseChimney,
  faBuildingColumns,
  faCircleArrowDown,
  faCircleArrowUp,
  faUserPen,
  faBars,
  faCircleXmark
);
import "./css/index.css";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

app.mount("#app");
