export default {
  state() {
    return {
      non_formal_meetings: "",
      number_of_days_from_office: "",
      what_about_meetings_in_live: "",
      tell_us_your_opinion_about_us: "",
      covidPoliticIsValid: false,
    };
  },
  getters: {
    nonFormalMeetings(state) {
      return state.non_formal_meetings;
    },
    numberOfDaysFromOffice(state) {
      return state.number_of_days_from_office;
    },
    whatAboutMeetingsInLive(state) {
      return state.what_about_meetings_in_live;
    },
    tellUsYourOpinionAboutUs(state) {
      return state.tell_us_your_opinion_about_us;
    },
    covidPoliticIsValid(state) {
      return state.covidPoliticIsValid;
    },
  },
  mutations: {
    updateNonFormalMeetings(state, payload) {
      state.non_formal_meetings = payload;
    },
    updateNumberOfDaysFromOffice(state, payload) {
      state.number_of_days_from_office = payload;
    },
    updateWhatAboutMeetingsInLive(state, payload) {
      state.non_formal_meetings = payload;
    },
    updateTellUsYourOpinionAboutUs(state, payload) {
      state.tell_us_your_opinion_about_us = payload;
    },
    updateCovidPoliticIsValid(state, payload) {
      state.covidPoliticIsValid = payload;
    },
  },
};

