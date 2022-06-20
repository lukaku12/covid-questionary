<template>
  <div
    class="mt-16 md:max-w-[250px] text-center md:text-left astyle appearAnimation"
  >
    <hr class="border-t-1 border-[#000000] md:max-w-[237px] mb-5" />
    <span class="text-[#626262]" v-html="text"></span>
  </div>
</template>

<script>
export default {
  name: "SmallFooter",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
