<template>
  <div class="hidden md:flex md:justify-center w-full md:w-1/2 relative">
    <img
      class="w-full h-full absolute top-0 left-0 right-0 bottom-0"
      :src="image"
      alt="boy-and-girl"
    />
    <img
      v-if="animationClass === 'rectangle'"
      class="-z-10"
      :class="animationClass"
      src="@/assets/images/rectangle.png"
      :alt="animationClass"
    />
    <img
      v-if="animationClass === 'red-ball'"
      class="-z-10"
      :class="animationClass"
      src="@/assets/images/red-ball.png"
      :alt="animationClass"
    />
    <img
      v-if="animationClass === 'star'"
      class="-z-10"
      :class="animationClass"
      src="@/assets/images/star.png"
      :alt="animationClass"
    />
    <img
      v-if="animationClass === 'heart'"
      class="-z-10"
      :class="animationClass"
      src="@/assets/images/heart.png"
      :alt="animationClass"
    />
  </div>
</template>
<script>
export default {
  name: "SectionImage",
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    animationClass() {
      return this.$route.matched[0].props.default.myClass;
    },
  },
};
</script>
