import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import DatePicker from "ant-design-vue/lib/date-picker";
import Tabs from "ant-design-vue/lib/tabs";

Vue.config.productionTip = false;
Vue.use(DatePicker);
Vue.use(Tabs);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
