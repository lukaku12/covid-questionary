export default {
  state() {
    //page1
    return {
      name: "",
      lastName: "",
      email: "",
      personalInfoIsValid: false,
    }
  },
  getters: {
    name(state) {
      return state.name;
    },
    lastName(state) {
      return state.lastName;
    },
    email(state) {
      return state.email;
    },
    personalInfoIsValid(state) {
      return state.personalInfoIsValid;
    },
  },
  mutations: {
    // page 1
    updateName(state, payload) {
      state.name = payload;
    },
    updateLastName(state, payload) {
      state.lastName = payload;
    },
    updateEmail(state, payload) {
      state.email = payload;
    },
    updatePersonalInfoIsValid(state, payload) {
      state.personalInfoIsValid = payload;
    },
  }

}