<template>
  <div>
    <img
      class="max-w-xl"
      :src="image"
      alt="boy-and-girl"
    />
  </div>
</template>
<script>
export default {
  name: "SectionImage",
  props: {
    image: {
      type: String,
      required: true
    }
  }
};
</script>