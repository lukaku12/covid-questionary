import { createStore } from "vuex";
import AreYouVaccinated from "@/store/are-you-vaccinated/AreYouVaccinated";
import CovidPolitic from "@/store/covid-politic/CovidPolitic";
import CovidState from "@/store/covid-state/CovidState";
import PersonalInformation from "@/store/personal-information/PersonalInformation";

const store = createStore({
  modules: {
    AreYouVaccinated,
    CovidPolitic,
    CovidState,
    PersonalInformation

  }
});

export default store;
