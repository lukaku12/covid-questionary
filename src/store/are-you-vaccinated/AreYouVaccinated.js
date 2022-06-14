export default {
  state() {
    return {
      had_vaccine: "",
      vaccination_stage: "",
      vaccine_date: "",
      vaccine_state_is_valid: false,
    };
  },
  getters: {
    hadVaccine(state) {
      return state.had_vaccine;
    },
    whatAreYouWaiting(state) {
      return state.vaccination_stage;
    },
    vaccineDate(state) {
      return state.vaccine_date;
    },
    vaccineStateIsValid(state) {
      return state.vaccine_state_is_valid;
    },
  },
  mutations: {
    updateHadVaccine(state, payload) {
      state.had_vaccine = payload;
    },
    updateWhatAreYouWaiting(state, payload) {
      state.vaccination_stage = payload;
    },
    updateVaccineDate(state, payload) {
      state.vaccine_date = payload;
    },
    updateVaccineStateIsValid(state, payload) {
      state.vaccine_state_is_valid = payload;
    },
  },
};

