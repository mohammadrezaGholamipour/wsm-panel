import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/Routes";
import "tw-elements";
import Notifications from "@kyvg/vue3-notification";
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
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleArrowUp,
  faUserPen,
  faBars,
  faCircleXmark,
  faUpRightAndDownLeftFromCenter,
  faDownLeftAndUpRightToCenter,
  faPrint,
  faGripLines,
  faLink,
  faSliders,
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
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleArrowUp,
  faUserPen,
  faBars,
  faCircleXmark,
  faUpRightAndDownLeftFromCenter,
  faDownLeftAndUpRightToCenter,
  faPrint,
  faGripLines,
  faLink,
  faSliders
);
import "./css/index.css";
router.beforeEach((to, from) => {
  console.log(to, from);
})
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(Notifications);
app.mount("#app");
