<template>
  <div class="flex flex-col mb-12 md:max-w-lg appearAnimation">
    <span class="font-bold text-xl mb-2">
      {{ question }}
    </span>
    <div v-for="option in options" :key="option" class="text-left ml-2">
      <input
        :id="option.value + name"
        type="radio"
        :name="name"
        :value="option.value"
        :checked="option.value === selectedValue"
        @input="updateInputValue"
      />
      <label :for="option.value + name" class="ml-5 font-normal text-xl">{{
        option.text
      }}</label>
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
    vuexMutation: {
      type: String,
      required: true,
    },
    validate: {
      type: Function,
      required: false,
      default: () => true,
    },
  },
  methods: {
    updateInputValue(e) {
      this.$store.commit(this.vuexMutation, e.target.value);
      this.validate();
    },
  },
};
</script>
