<template>
  <div class="flex gap-4">
    <router-link :to="{ name: prevPage }">
      <button>Back</button>
    </router-link>
    <router-link :to="{ name: nextPage }">
      <button @click="validateForm">Next</button>
    </router-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
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
    validateForm: {
      type: Function,
      required: true,
    },
  },
};
</script>
