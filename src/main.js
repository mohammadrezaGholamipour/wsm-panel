import { createApp } from "vue";
import App from "./App.vue";
import AuthService from "./api/auth.js";
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
router.beforeEach((to, from, next) => {
  if (to.path == from.path && to.path != "/") return;
  const isAuthenticated = AuthService.hasToken();
  const hasRouterUrl = to?.matched?.length > 0;
  if (!isAuthenticated) {
    if (to.name != "login")
      return next({ path: '/login' });
  } else if (!hasRouterUrl) {
    if (to.name != 'login')
      return next({ path: "/" });
  }
  next();
});
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(Notifications);
app.mount("#app");
