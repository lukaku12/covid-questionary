export default {
  state() {
    return {
      had_covid: "",
      had_antibody_test: "",
      antibodies: "",
      covid_state_is_valid: false,
    };
  },
  getters: {
    hadCovid(state) {
      return state.had_covid;
    },
    hadCovidTest(state) {
      return state.had_antibody_test;
    },
    whenCovid(state) {
      return state.antibodies;
    },
    covidStateIsValid(state) {
      return state.covid_state_is_valid;
    },
  },
  mutations: {
    updateHadCovid(state, payload) {
      state.had_covid = payload;
    },
    updateHadCovidTest(state, payload) {
      state.had_antibody_test = payload;
    },
    updateWhenCovid(state, payload) {
      state.antibodies = payload;
    },
    updateCovidStateIsValid(state, payload) {
      state.covid_state_is_valid = payload;
    },
  },
};

