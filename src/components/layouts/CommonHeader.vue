<template>
  <header class="header mb-10 w-full">
    <div class="flex justify-between align-middle">
      <img src="../../assets/icons/redberry.svg" alt="redberry" />
      <div>
        <span
          class="text-4xl text-[#232323] font-anonnymusPro font-bold appearAnimation"
        >
          {{ page }}
        </span>
        <span class="text-4xl text-[#232323] font-anonnymusPro font-bold"
          >/4</span
        >
      </div>
    </div>

    <hr class="border-t-3 border-[#323232] mt-6" />
  </header>
</template>

<script>
export default {
  name: "CommonHeader",
  props: {
    page: {
      type: String,
      required: true,
    },
  },
};
</script>
