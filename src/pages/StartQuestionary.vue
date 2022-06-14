<template>
  <div class="intro">
    <div class="carousel-inner">
      <div class="item black"></div>
    </div>
    <div class="text">
      <span>
        <router-link :to="{ name: 'question1' }" class="button1">
          <p class="buttonText">
            <i>
              კითხვარის <br />
              დაწყება
            </i>
          </p>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartQuestionary",
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
