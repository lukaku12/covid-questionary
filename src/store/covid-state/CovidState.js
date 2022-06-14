export default {
  state() {
    return {
      had_covid: "",
      had_antibody_test: "",
      covid_date: "",
      antibodies: {
        covid_date: "",
        number: ""
      },
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
    covidDate(state) {
      return state.covid_date;
    },
    antibodies(state) {
      return state.antibodies
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

