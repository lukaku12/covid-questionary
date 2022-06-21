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
  },
  mutations: {
    updateNonFormalMeetings(state, payload) {
      state.non_formal_meetings = payload;
    },
    updateNumberOfDaysFromOffice(state, payload) {
      state.number_of_days_from_office = payload;
    },
    updateWhatAboutMeetingsInLive(state, payload) {
      state.what_about_meetings_in_live = payload;
    },
    updateTellUsYourOpinionAboutUs(state, payload) {
      state.tell_us_your_opinion_about_us = payload;
    },
    updateCovidPoliticIsValid(state, payload) {
      state.covidPoliticIsValid = payload;
    },
  },
};
