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
    getCovidState(state) {
      return {
        had_covid: state.had_covid,
        ...(state.had_covid === "yes" && {
          had_antibody_test: state.had_antibody_test === "yes",
          ...(state.had_antibody_test === "yes" && {
            antibodies: {
              covid_date: state.antibodies.covid_date,
              number: parseInt(state.antibodies.number),
            },
          }),
          ...(state.had_antibody_test === "no" && {
            covid_sickness_date: state.covid_date.replace(/-/g, "/"),
          }),
        }),
      }
    }
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
