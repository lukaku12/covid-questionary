<template>
  <div class="flex justify-center items-center flex-col h-screen">
    <img src="../assets/images/logo.svg" alt="logo" />
    <span class="text-3xl font-bold mt-25 text text-center">
      <router-link :to="{ name: 'question1' }"> კითხვარის დაწყება </router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "StartQuestionary",
};
</script>
