<template>
  <div class="flex flex-col mb-12 max-w-lg">
    <label for="date" class="font-bold text-xl mb-2" v-html="question"></label>
    <textarea
      :name="name"
      :value="value"
      @input="updateValue"
      class="w-full h-24 border border-[#232323] bg-transparent pl-5 focus:outline-none resize-none"
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
    value: {
      type: String,
      required: true,
    },
    updateValue: {
      type: Function,
      required: true,
    },
  },
};
</script>
