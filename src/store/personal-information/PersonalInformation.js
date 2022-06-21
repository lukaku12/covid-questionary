export default {
  state() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      personal_info_is_valid: false,
    };
  },
  getters: {
    getPersonalInfo(state) {
      return {
        first_name: state.first_name,
        last_name: state.last_name,
        email: state.email,
      }
    },
  },
  mutations: {
    updateFirstName(state, payload) {
      state.first_name = payload;
    },
    updateLastName(state, payload) {
      state.last_name = payload;
    },
    updateEmail(state, payload) {
      state.email = payload;
    },
    updatePersonalInfoIsValid(state, payload) {
      state.personal_info_is_valid = payload;
    },
  },
};
