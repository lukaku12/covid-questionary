<template>
  <div class="mt-16 max-w-[250px]">
    <hr class="border-t-1 border-[#000000] max-w-[237px] mb-5" />
    <span class="text-[#626262]" v-html="text">
    </span>
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
