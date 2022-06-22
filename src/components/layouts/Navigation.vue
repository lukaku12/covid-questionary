<template>
  <div class="flex justify-center items-center my-10 w-full gap-6">
    <button>
      <router-link :to="{ name: prevPage }">
        <img src="@/assets/icons/arrow-left.svg" alt="arrow-left" />
      </router-link>
    </button>
    <button
      v-if="currentPage !== '4'"
      :class="
        !goToNextPageIfInputsAreValid &&
        'opacity-40 pointer-events-none ease-in duration-300'
      "
    >
      <router-link :to="{ name: nextPage }">
        <img src="@/assets/icons/arrow-right.svg" alt="arrow-right" />
      </router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    prevPage: {
      type: String,
      required: true,
    },
    nextPage: {
      type: String,
      required: true,
    },
  },
  computed: {
    currentPage() {
      return this.$route.path.replace("/questionary/", "");
    },
    goToNextPageIfInputsAreValid() {
      let formISValid = false;
      if (this.currentPage === "1") {
        formISValid =
          this.$store.state.PersonalInformation.personal_info_is_valid;
      }
      if (this.currentPage === "2") {
        formISValid = this.$store.state.CovidState.covid_state_is_valid;
      }
      if (this.currentPage === "3") {
        formISValid = this.$store.state.AreYouVaccinated.vaccine_state_is_valid;
      }
      if (this.currentPage === "4") {
        formISValid = this.$store.state.CovidPolitic.covid_politic_is_valid;
      }
      return formISValid;
    },
  },
};
</script>
