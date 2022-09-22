import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'vue-toastification/dist/index.css';
import Toast from 'vue-toastification';
import router from './router/Routes';
import { createApp } from 'vue';
import App from './App.vue';
import './css/index.css';
import 'tw-elements';
/* icon */
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
  faMessage,
  faChartSimple
} from '@fortawesome/free-solid-svg-icons';
/* add Icon */
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
  faSliders,
  faMessage,
  faChartSimple
);
const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(Toast);
app.mount('#app');
