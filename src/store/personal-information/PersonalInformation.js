export default {
  state() {
    //page1
    return {
      first_name: "",
      last_name: "",
      email: "",
      personal_info_is_valid: false,
    }
  },
  getters: {
    firstName(state) {
      return state.first_name;
    },
    lastName(state) {
      return state.last_name;
    },
    email(state) {
      return state.email;
    },
    personalInfoIsValid(state) {
      return state.personal_info_is_valid;
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
      console.log(state.personal_info_is_valid);
    },
  }

}