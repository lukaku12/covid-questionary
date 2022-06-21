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
    getAreYouVaccinated(state) {
      return {
        had_vaccine: state.had_vaccine === "yes",
        ...(state.had_vaccine === "yes" && {
          vaccination_stage: state.vaccination_stage,
        }),
        ...(state.had_vaccine === "no" && {
          i_am_waiting: state.what_are_you_waiting_for,
        }),
      }
    }
  },
  mutations: {
    updateHadVaccine(state, payload) {
      state.had_vaccine = payload;
    },
    updateVaccinationStage(state, payload) {
      state.vaccination_stage = payload;
    },
    updateWhatAreYouWaiting(state, payload) {
      state.what_are_you_waiting_for = payload;
    },
    updateVaccineStateIsValid(state, payload) {
      state.vaccine_state_is_valid = payload;
    },
  },
};
