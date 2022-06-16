<template>
  <div class="flex flex-col mb-12 md:max-w-lg appearAnimation">
    <span class="font-bold text-xl mb-2">
      {{ question }}
    </span>
    <div class="text-left ml-2" v-for="option in options" :key="option">
      <input
        type="radio"
        :id="option.value + name"
        :name="name"
        :value="option.value"
        :checked="option.value === selectedValue"
        @input="updateValue"
      />
      <label :for="option.value + name" class="ml-5 font-normal text-xl">{{ option.text }}</label>
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
