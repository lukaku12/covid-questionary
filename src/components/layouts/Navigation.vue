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
        !formIsValid && 'opacity-40 pointer-events-none ease-in duration-300'
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
    formIsValid: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    currentPage() {
      return this.$route.path.replace("/questionary/", "");
    },
  },
};
</script>
