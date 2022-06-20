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
      :src="rectangle"
      :alt="animationClass"
    />
    <img
      v-if="animationClass === 'red-ball'"
      class="-z-10"
      :class="animationClass"
      :src="circle"
      :alt="animationClass"
    />
    <img
      v-if="animationClass === 'star'"
      class="-z-10"
      :class="animationClass"
      :src="star"
      :alt="animationClass"
    />
    <img
      v-if="animationClass === 'heart'"
      class="-z-10"
      :class="animationClass"
      :src="heard"
      :alt="animationClass"
    />
  </div>
</template>
<script>
import rectangle from "@/assets/images/rectangle.png";
import circle from "@/assets/images/red-ball.png";
import star from "@/assets/images/star.png";
import heard from "@/assets/images/heart.png";

export default {
  name: "SectionImage",
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      rectangle: rectangle,
      circle: circle,
      star: star,
      heard: heard,
    };
  },
  computed: {
    animationClass() {
      return this.$route.matched[0].props.default.myClass;
    },
  },
};
</script>
