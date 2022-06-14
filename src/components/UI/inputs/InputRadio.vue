<template>
  <div class="flex flex-col mb-12 max-w-lg">
    <label :for="name" class="font-bold text-xl mb-2">
      {{ question }}
    </label>
    <div v-for="option in options" :key="option">
      <input
        type="radio"
        :name="name"
        :value="option.value"
        :checked="option.value === selectedValue"
        @input="updateValue"
      />
      <span class="ml-5 font-normal text-xl">{{ option.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputRadio",
  props: {
    question: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    selectedValue: {
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
