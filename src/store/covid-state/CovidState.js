export default {
  state() {
    return {
      hadCovid: "",
      hadCovidTest: "",
      whenCovid: "",
      covidStateIsValid: false,
    };
  },
  getters: {
    hadCovid(state) {
      return state.hadCovid;
    },
    hadCovidTest(state) {
      return state.hadCovidTest;
    },
    whenCovid(state) {
      return state.whenCovid;
    },
    covidStateIsValid(state) {
      return state.covidStateIsValid;
    },
  },
  mutations: {
    updateHadCovid(state, payload) {
      state.hadCovid = payload;
    },
    updateHadCovidTest(state, payload) {
      state.hadCovidTest = payload;
    },
    updateWhenCovid(state, payload) {
      state.whenCovid = payload;
    },
    updateCovidStateIsValid(state, payload) {
      state.covidStateIsValid = payload;
    },
  },
};

