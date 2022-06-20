import { createRouter, createWebHistory } from "vue-router";

import AreYouVaccinated from "../pages/AreYouVaccinated.vue";
import CovidPolitic from "../pages/CovidPolitic.vue";
import CovidState from "../pages/CovidState.vue";
import PersonalInformation from "../pages/PersonalInformation.vue";
import StartQuestionary from "../pages/StartQuestionary.vue";
import ThankYou from "../pages/ThankYou.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: StartQuestionary, name: "start-question" },
    {
      path: "/questionary/1",
      component: PersonalInformation,
      name: "question1",
      props: { myClass: "rectangle" },
    },
    {
      path: "/questionary/2",
      component: CovidState,
      name: "question2",
      props: { myClass: "red-ball" },
    },
    {
      path: "/questionary/3",
      component: AreYouVaccinated,
      name: "question3",
      props: { myClass: "star" },
    },
    {
      path: "/questionary/4",
      component: CovidPolitic,
      name: "question4",
      props: { myClass: "heart" },
    },
    { path: "/thank-you", component: ThankYou, name: "thank-you" },
    { path: "/:notFound(.*)", redirect: "/" },
  ],
});

export default router;
