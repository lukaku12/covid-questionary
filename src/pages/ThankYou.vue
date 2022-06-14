<template>
  <div class="flex justify-center items-center flex-col h-screen bg-[#232323]">
    <span class="text-white font-bold text-7xl"> მადლობა </span>
    {{ test }}
  </div>
</template>

<script>
export default {
  name: "ThankYou",
  computed: {
    test() {
      return console.log(this.$store.state);
    },
  },
};
</script>
