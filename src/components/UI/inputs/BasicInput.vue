<template>
  <div class="flex flex-col mb-12 md:max-w-lg w-full appearAnimation">
    <label :for="name" class="font-bold text-xl mb-2">{{ question }}</label>
    <Field
      mode="lazy"
      class="border border-[#232323] bg-transparent pl-5 h-12 focus:outline-none"
      :type="type"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :rules="rules"
      @input="updateInputValue"
    />
    <ErrorMessage class="text-red-600" :name="name"></ErrorMessage>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
export default {
  name: "BasicInput",
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    question: {
      type: String,
      required: false,
      default: "",
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
      default: "",
    },
    updateVuex: {
      type: String,
      required: true,
    },
    rules: {
      type: String,
      required: false,
      default: "",
    },
  },
  methods: {
    updateInputValue(e) {
      this.$store.commit(this.updateVuex, e.target.value);
    },
  },
};
</script>
