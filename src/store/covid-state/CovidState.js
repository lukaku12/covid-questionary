export default {
  state() {
    return {
      had_covid: "",
      had_antibody_test: "",
      covid_date: "",
      antibodies: {
        covid_date: "",
        number: "",
      },
      covid_state_is_valid: false,
    };
  },
  getters: {
  },
  mutations: {
    updateHadCovid(state, payload) {
      state.had_covid = payload;
    },
    updateHadAntibodyTest(state, payload) {
      state.had_antibody_test = payload;
    },
    updateCovidDate(state, payload) {
      state.covid_date = payload;
    },
    updateAntibodies(state, payload) {
      state.antibodies.covid_date = payload;
    },
    updateAntibodiesNumber(state, payload) {
      state.antibodies.number = payload;
    },
    updateCovidStateIsValid(state, payload) {
      state.covid_state_is_valid = payload;
    },
  },
};
