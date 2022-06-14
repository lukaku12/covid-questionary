export default {
  state() {
    return {
      had_vaccine: "",
      vaccination_stage: "",
      what_are_you_waiting_for: "",
      vaccine_state_is_valid: false,
    };
  },
  getters: {
    hadVaccine(state) {
      return state.had_vaccine;
    },
    vaccinationStage (state) {
      return state.vaccination_stage
    },
    whatAreYouWaiting(state) {
      return state.what_are_you_waiting_for;
    },
    vaccineStateIsValid(state) {
      return state.vaccine_state_is_valid;
    },
  },
  mutations: {
    updateHadVaccine(state, payload) {
      state.had_vaccine = payload;
    },
    updateVaccinationStage(state, payload) {
      state.vaccination_stage = payload;
    },
    updateWhatAreYouWaiting(state, payload) {
      console.log(payload);
      state.what_are_you_waiting_for = payload;
    },
    updateVaccineStateIsValid(state, payload) {
      state.vaccine_state_is_valid = payload;
    },
  },
};

