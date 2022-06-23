export default {
  state() {
    return {
      first_name: "",
      last_name: "",
      email: "",
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
  },
};
