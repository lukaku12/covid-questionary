<template>
  <div class="w-screen h-screen bg-[#232323] flex justify-center items-center">
    <div class="relative">
      <span
        class="text1 text-white font-bold text-2xl animate-bounce leading-10 relative md:text-6xl"
      >
        <i>მადლობა</i>
      </span>
      <img
        class="absolute left-star"
        src="@/assets/icons/vector-thank-you.png"
        alt="left-star"
      />
      <img
        class="absolute right-star"
        src="@/assets/icons/vector-thank-you.png"
        alt="right-star"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ThankYou",
};
</script>
