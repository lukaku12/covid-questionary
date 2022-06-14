<template>
  <Layout>
    <CommonHeader page="2" />
    <div class="flex justify-between font-helvetica flex w-full md:h-[70vh]">
      <div class="w-full md:w-1/2 md:mt-10 overflow-auto">
        <form class="w-full text-center md:text-left">
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

          <input-radio v-if="hadCovidValue === 'yes'"
                       question="ანტისხეულების ტესტი გაქვს გაკეთებული?*"
                       name="antibodies_test"
                       :options="[
              { text: 'კი', value: 'yes' },
              { text: 'არა', value: 'no' },
            ]"
                       :selected-value="hadCovidTestValue"
                       :update-value="updateHadCovidTestValue"
          />

          <basic-input v-if="hadCovidValue === 'yes' && hadCovidTestValue === 'no'"
                       question="მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*"
                       type="date"
                       name="had_covid_date"
                       placeholder="დდ/თთ/წწ"
                       :value="whenCovidValue"
                       :update-value="updateWhenCovidValue"
                       error-msg=""
          />

          <basic-input v-if="hadCovidValue === 'yes' && hadCovidTestValue === 'yes'"
                       question="თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*"
                       type="date"
                       name="had_covid_date"
                       :value="antibodiesValue.covid_date"
                       :update-value="updateAntibodiesCovidDateValue"
                       error-msg=""
          />
          <basic-input v-if="hadCovidValue === 'yes' && hadCovidTestValue === 'yes'"
                       question=""
                       type="number"
                       name="had_covid_date"
                       placeholder="ანტისხეულების რაოდენობა"
                       :value="antibodiesValue.number"
                       :update-value="updateAntibodiesNumberValue"
                       error-msg=""
          />
        </form>
      </div>
      <section-image :image="vaccine"></section-image>
    </div>
    <Navigation
      prev-page="question1"
      next-page="question3"
      :validate-form="validateForm"
    ></Navigation>
  </Layout>
</template>

<script>
import CommonHeader from "../components/layouts/CommonHeader.vue";
import Layout from "../components/layouts/Layout.vue";
import InputRadio from "../components/UI/inputs/InputRadio.vue";
import BasicInput from "../components/UI/inputs/BasicInput.vue";
import Navigation from "@/components/layouts/Navigation";
import SectionImage from "@/components/layouts/SectionImage";
import vaccine from "../assets/images/scan-vaccinate.png";

export default {
  name: "CovidState",
  components: {
    CommonHeader,
    Layout,
    InputRadio,
    BasicInput,
    Navigation,
    SectionImage
  },
  data() {
    return {
      vaccine: vaccine
    };
  },
  computed: {
    hadCovidValue() {
      return this.$store.getters.hadCovid;
    },
    hadCovidTestValue() {
      return this.$store.getters.hadCovidTest;
    },
    whenCovidValue() {
      return this.$store.getters.covidDate;
    },
    antibodiesValue() {
      return this.$store.getters.antibodies;
    }
  },
  methods: {
    updateHadCovidValue(e) {
      this.$store.commit("updateHadCovid", e.target.value);
    },
    updateHadCovidTestValue(e) {
      this.$store.commit("updateHadCovidTest", e.target.value);
    },
    updateWhenCovidValue(e) {
      this.$store.commit("updateCovidDate", e.target.value);
    },
    updateAntibodiesCovidDateValue(e) {
      this.$store.commit("updateAntibodies", e.target.value);
    },
    updateAntibodiesNumberValue(e) {
      this.$store.commit("updateAntibodiesNumber", e.target.value);
    },
    validateForm() {

    }
  }
};
</script>
