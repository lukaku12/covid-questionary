<template>
  <p class="text-right mr-2 text-red-600 mb-3.5">{{ apiError }}</p>
  <button
    type="button"
    class="bg-[#208298] py-3 px-6 rounded-3xl absolute right-2 text-white font-bold"
    :class="!covidPoliticIsValidValue && 'opacity-40 cursor-not-allowed ease-in duration-300'"
    :disabled="!covidPoliticIsValidValue"
    @click="submitForm"
  >
    დასრულება
  </button>
</template>

<script>
export default {
  name: "SubmitFormButton",
  data () {
    return {
      apiError: ''
    }
  },
  computed: {
    covidPoliticIsValidValue() {
      return this.$store.getters.covidPoliticIsValid;
    }
  },
  methods: {
    submitForm() {
      const state = this.$store.state;
      const sendData = {
        first_name: state.PersonalInformation.first_name,
        last_name: state.PersonalInformation.last_name,
        email: state.PersonalInformation.email,

        had_covid: state.CovidState.had_covid,
        ...(state.CovidState.had_covid === "yes" && {
          had_antibody_test: state.CovidState.had_antibody_test === "yes",
          ...(state.CovidState.had_antibody_test === "yes" && {
            antibodies: {
              covid_date: state.CovidState.antibodies.covid_date,
              number: parseInt(state.CovidState.antibodies.number)
            }
          }),
          ...(state.CovidState.had_antibody_test === "no" && { covid_sickness_date: state.CovidState.covid_date.replace(/-/g, "/") })
        }),

        had_vaccine: state.AreYouVaccinated.had_vaccine === "yes",
        ...(state.AreYouVaccinated.had_vaccine === "yes" && { vaccination_stage: state.AreYouVaccinated.vaccination_stage }),
        ...(state.AreYouVaccinated.had_vaccine === "no" && { i_am_waiting: state.AreYouVaccinated.what_are_you_waiting_for }),

        non_formal_meetings: state.CovidPolitic.non_formal_meetings,
        number_of_days_from_office: parseInt(state.CovidPolitic.number_of_days_from_office),

        ...(state.CovidPolitic.what_about_meetings_in_live !== "" && { what_about_meetings_in_live: state.CovidPolitic.what_about_meetings_in_live }),
        ...(state.CovidPolitic.tell_us_your_opinion_about_us !== "" && { tell_us_your_opinion_about_us: state.CovidPolitic.tell_us_your_opinion_about_us })
      };
      async function postData(url = "", data = {}) {
        return await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
      }

      const router = this.$router;
      postData("https://covid19.devtest.ge/api/create", sendData)
        .then(data => {
          if (!data.ok) {
            this.apiError  = 'Something Went Wrong Please Try Again Later!';
            return;
          }
          router.push({ name: "thank-you" });
        });
    }
  }
};

</script>