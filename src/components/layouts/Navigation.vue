<template>
  <div class="flex justify-center items-center my-10 w-full gap-6">
    <button>
      <router-link :to="{ name: prevPage }">
        <img src="@/assets/icons/arrow-left.svg" alt="<">
      </router-link>
    </button>
    <button v-if="currentPage !== '4'" :class="!this.goToNextPageIfInputsAreValid && 'opacity-40 pointer-events-none ease-in duration-300'">
      <router-link :to="{ name: nextPage }">
        <img src="@/assets/icons/arrow-right.svg" alt=">">
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
      required: true
    },
    nextPage: {
      type: String,
      required: true
    },
  },
  computed: {
    currentPage() {
      return this.$route.path.replace("/questionary/", "");
    },
    goToNextPageIfInputsAreValid() {
      let formISValid = false
      if(this.currentPage === "1") {
        formISValid = this.$store.getters.personalInfoIsValid;
      }
      if(this.currentPage === "2") {
        formISValid = this.$store.getters.covidStateIsValid
      }
      if(this.currentPage === "3") {
        formISValid = this.$store.getters.vaccineStateIsValid
      }
      if(this.currentPage === "4") {
        formISValid = this.$store.getters.covidPoliticIsValid
      }
      return formISValid;
    }
  }

};
</script>
