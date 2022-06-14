<template>
  <div class="flex flex-col mb-12 max-w-lg">
    <label for="date" class="font-bold text-xl mb-2" v-html="question"></label>
    <textarea
      :name="name"
      class="w-full h-24 border border-[#232323] bg-transparent pl-5 focus:outline-none"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "BasicInput",
  props: {
    question: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
