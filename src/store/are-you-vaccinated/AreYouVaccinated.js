export default {
  state() {
    return {
      hadVaccine: "",
      whatAreYouWaiting: "",
      vaccineDate: "",
      vaccineStateIsValid: false,
    };
  },
  getters: {
    hadVaccine(state) {
      return state.hadVaccine;
    },
    whatAreYouWaiting(state) {
      return state.whatAreYouWaiting;
    },
    vaccineDate(state) {
      return state.vaccineDate;
    },
    vaccineStateIsValid(state) {
      return state.vaccineStateIsValid;
    },
  },
  mutations: {
    // page 3
    updateHadVaccine(state, payload) {
      state.hadVaccine = payload;
    },
    updateWhatAreYouWaiting(state, payload) {
      state.whatAreYouWaiting = payload;
    },
    updateVaccineDate(state, payload) {
      state.vaccineDate = payload;
    },
    updateVaccineStateIsValid(state, payload) {
      state.vaccineStateIsValid = payload;
    },
  },
};

