<template>
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
  computed: {
    covidPoliticIsValidValue() {
      return this.$store.getters.covidPoliticIsValid;
    }
  },
  methods: {
    submitForm() {
      const state = this.$store.state;
      console.log(state);
      const sendData = {
        first_name: state.PersonalInformation.first_name,
        last_name: state.PersonalInformation.last_name,
        email: state.PersonalInformation.email,
        had_covid: state.CovidState.had_covid,
        had_antibody_test: state.CovidState.had_antibody_test === 'yes',
        antibodies: state.CovidState.antibodies,
        had_vaccine: state.AreYouVaccinated.had_vaccine === 'yes',
        vaccination_stage: state.AreYouVaccinated.vaccination_stage,
        non_formal_meetings: state.CovidPolitic.non_formal_meetings,
        number_of_days_from_office: parseInt(state.CovidPolitic.number_of_days_from_office),
        what_about_meetings_in_live: state.CovidPolitic.what_about_meetings_in_live,
        tell_us_your_opinion_about_us: state.CovidPolitic.tell_us_your_opinion_about_us
      };
      console.log(sendData);
      // async function postData(url = "", data = {}) {
      //   return await fetch(url, {
      //     method: "POST",
      //     headers: {
      //       'Content-Type': "application/json"
      //     },
      //     body: JSON.stringify(data)
      //   });
      // }

      // postData("https://covid19.devtest.ge/api/create", sendData)
      //   .then(data => {
      //     console.log(data);
      //   });
    }
  }
};

</script>