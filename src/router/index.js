import { createRouter, createWebHistory } from "vue-router";

import StartQuestionary from "../pages/StartQuestionary.vue";
import PersonalInformation from "../pages/PersonalInformation.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: StartQuestionary, name: "start-question" },
    {
      path: "/questionary/1",
      component: PersonalInformation,
      name: "question1",
    },
    { path: "/:notFound(.*)", redirect: "/" },
  ],
});

export default router;
