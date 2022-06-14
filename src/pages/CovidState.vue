<template>
  <Layout>
    <CommonHeader page="2" />
    <div class="flex justify-between font-helvetica">
      <div>
        <form>
          <input-radio
            question="გაქვს გადატანილი Covid-19?*"
            name="had_covid"
            :options="[
              { text: 'კი', value: 'yes' },
              { text: 'არა', value: 'no' },
              { text: 'ახლა მაქვს', value: 'in progress' },
            ]"
            :selected-value="hadCovidValue"
            :update-value="updateHadCovidValue"
          />

          <input-radio
            question="ანტისხეულების ტესტი გაქვს გაკეთებული?*"
            name="antibodies_test"
            :options="[
              { text: 'კი', value: 'yes' },
              { text: 'არა', value: 'no' },
            ]"
            :selected-value="hadCovidTestValue"
            :update-value="updateHadCovidTestValue"
          />

          <basic-input
            question="მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*"
            type="date"
            name="had_covid_date"
            :value="whenCovidValue"
            :update-value="updateWhenCovidValue"
          />
        </form>
        <Navigation prev-page="question1" next-page="question3"></Navigation>
      </div>

      <div>
        <img
          class="max-w-xl"
          src="../assets/images/scan-boy-and-girl.png"
          alt="boy-and-girl"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import CommonHeader from "../components/layouts/CommonHeader.vue";
import Layout from "../components/layouts/Layout.vue";
import InputRadio from "../components/UI/inputs/InputRadio.vue";
import BasicInput from "../components/UI/inputs/BasicInput.vue";
import Navigation from "@/components/layouts/Navigation";

export default {
  name: "CovidState",
  components: {
    CommonHeader,
    Layout,
    InputRadio,
    BasicInput,
    Navigation,
  },
  computed: {
    hadCovidValue() {
      return this.$store.getters.hadCovid;
    },
    hadCovidTestValue() {
      return this.$store.getters.hadCovidTest;
    },
    whenCovidValue() {
      return this.$store.getters.whenCovid;
    },
  },
  methods: {
    updateHadCovidValue(e) {
      this.$store.commit("updateHadCovid", e.target.value);
    },
    updateHadCovidTestValue(e) {
      this.$store.commit("updateHadCovidTest", e.target.value);
    },
    updateWhenCovidValue(e) {
      this.$store.commit("updateWhenCovid", e.target.value);
    },
  },
};
</script>
