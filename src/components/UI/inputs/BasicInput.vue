<template>
  <div class="flex flex-col mb-12 md:max-w-lg w-full">
    <label :for="name" class="font-bold text-xl mb-2">{{ question }}</label>
    <input
      class="border border-[#232323] bg-transparent pl-5 h-12 focus:outline-none"
      :type="type"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      @input="updateValue"
    />
    <span class="text-[#F15524]">
      {{ errorMsg }}
    </span>
  </div>
</template>

<script>
export default {
  name: "BasicInput",
  props: {
    question: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
      default: "text",
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    errorMsg: {
      type: null,
      required: true,
    },
    updateValue: {
      type: Function,
      required: true,
    },
  },
};
</script>
