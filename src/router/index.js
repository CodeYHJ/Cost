import Vue from "vue";
import VueRouter from "vue-router";
import Money from "@/views/Money.vue";
import Me from "@/views/Me.vue";
import Statistics from "@/views/Statistics.vue";
import NotFound from "@/views/NotFound.vue";
import EditLabel from "@/views/EditLabel.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/statistics"
  },
  {
    path: "/money",
    component: Money
  },
  {
    path: "/me",
    component: Me
  },
  {
    path: "/statistics",
    component: Statistics
  },
  {
    path: "/labels/edit/:id",
    component: EditLabel
  },
  {
    path: "*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
