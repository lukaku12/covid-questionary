<template>
  <div class="flex gap-4 justify-center items-center my-10 w-full gap-6">
    <button>
      <router-link :to="{ name: prevPage }">
        <img :src="arrowLeft" alt="">
      </router-link>
    </button>
    <button :class="!this.goToNextPageIfInputsAreValid && 'opacity-40 pointer-events-none ease-in duration-300'">
      <router-link :to="{ name: nextPage }">
        <img :src="arrowRight" alt="">
      </router-link>
    </button>
  </div>
</template>

<script>
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
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
  data() {
    return {
      arrowLeft: arrowLeft,
      arrowRight: arrowRight
    };
  },
  computed: {
    currentPage() {
      return this.$route.path.replace("/questionary/", "");
    },
    goToNextPageIfInputsAreValid() {
      return this.$store.getters.personalInfoIsValid && this.currentPage === "1";
    }
  }

};
</script>
