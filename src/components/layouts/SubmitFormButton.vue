<template>
  <p class="text-right mr-2 text-red-600 mb-3.5">{{ apiError }}</p>
  <button
    type="button"
    class="bg-[#208298] py-3 px-6 rounded-3xl absolute right-2 text-white font-bold"
    :class="
      !covidPoliticIsValid &&
      'opacity-40 cursor-not-allowed ease-in duration-300'
    "
    :disabled="!covidPoliticIsValid"
    @click="submitForm"
  >
    დასრულება
  </button>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "SubmitFormButton",
  data() {
    return {
      apiError: "",
    };
  },
  computed: {
    ...mapState({
      covidPoliticIsValid: (state) => state.CovidPolitic.covid_politic_is_valid,
    }),
  },
  methods: {
    submitForm() {
      const getters = this.$store.getters;

      const sendData = {
        ...getters.getPersonalInfo,
        ...getters.getCovidState,
        ...getters.getAreYouVaccinated,
        ...getters.getCovidPolitic,
      };

      const router = this.$router;

      axios
        .post("https://covid19.devtest.ge/api/create", sendData)
        .then(() => {
          router.push({ name: "thank-you" });
        })
        .catch(() => {
          this.apiError = "Something Went Wrong Please Try Again Later!";
        });
    },
  },
};
</script>
