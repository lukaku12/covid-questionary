import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      //page1
      name: "",
      lastName: "",
      email: "",
      personalInfoIsValid: false,
      //page2
      hadCovid: "",
      hadCovidTest: "",
      whenCovid: "",
      covidStateIsValid: false,
      //page3
      hadVaccine: "",
      whatAreYouWaiting: "",
      vaccineDate: "",
      vaccineStateIsValid: false,
      // page 4
      onlineMeetings: "",
      fromOffice: "",
      covidPoliticIsValid: false,
    };
  },
  getters: {
    // page 1
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
    // page 2
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
    // page 3
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
    // page 4
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
    // page 2
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
    // page 4
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
});

export default store;
