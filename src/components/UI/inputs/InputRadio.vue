<template>
  <div class="flex flex-col mb-12 md:max-w-lg appearAnimation">
    <span class="font-bold text-xl mb-2">
      {{ question }}
    </span>
    <div v-for="option in options" :key="option" class="text-left ml-2">
      <Field
        :id="option.value + name"
        type="radio"
        :name="name"
        :value="option.value"
        :checked="option.value === selectedValue"
        rule="required"
        @input="updateInputValue"
      />
      <label :for="option.value + name" class="ml-5 font-normal text-xl">{{
        option.text
      }}</label>
      <ErrorMessage :name="name"></ErrorMessage>
    </div>
    <div class="flex items-center">
      <Field
        name="had_covid"
        class="scale-125"
        type="radio"
        rules="required"
        value="yes"
        @input="updateInputValue"
      />
      <label class="ml-5" for="had_covid">კი</label>
    </div>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
export default {
  name: "InputRadio",
  components: {
    Field,
    ErrorMessage
  },
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
    // rules: {
    //   type: String,
    //   required: true,
    // },
  },
  methods: {
    updateInputValue(e) {
      console.log(this.$props);
      this.$store.commit(this.vuexMutation, e.target.value);
    },
  },
};
</script>
