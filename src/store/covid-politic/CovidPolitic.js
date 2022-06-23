export default {
  state() {
    return {
      non_formal_meetings: "",
      number_of_days_from_office: "",
      what_about_meetings_in_live: "",
      tell_us_your_opinion_about_us: "",
    };
  },
  getters: {
    getCovidPolitic(state) {
      return {
        non_formal_meetings: state.non_formal_meetings,
        number_of_days_from_office: parseInt(
          state.number_of_days_from_office
        ),
        ...(state.what_about_meetings_in_live !== "" && {
          what_about_meetings_in_live:
            state.what_about_meetings_in_live,
        }),
        ...(state.tell_us_your_opinion_about_us !== "" && {
          tell_us_your_opinion_about_us:
            state.tell_us_your_opinion_about_us,
        }),
      }
    }
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
  },
};
