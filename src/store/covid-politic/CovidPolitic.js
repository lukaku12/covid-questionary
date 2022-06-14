export default {
  state() {
    return {
      onlineMeetings: "",
      fromOffice: "",
      covidPoliticIsValid: false,
    };
  },
  getters: {
    onlineMeetings(state) {
      return state.onlineMeetings;
    },
    fromOffice(state) {
      return state.fromOffice;
    },
    covidPoliticIsValid(state) {
      return state.covidPoliticIsValid;
    },
  },
  mutations: {
    updateOnlineMeetings(state, payload) {
      state.onlineMeetings = payload;
    },
    updateFromOffice(state, payload) {
      state.fromOffice = payload;
    },
    updateCovidPoliticIsValid(state, payload) {
      state.covidPoliticIsValid = payload;
    },
  },
};

