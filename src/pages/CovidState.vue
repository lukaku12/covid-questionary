<template>
  <Layout>
    <Form v-slot="{meta}" as="div">
      <CommonHeader page="2" />
      <div class="flex justify-between font-helvetica w-full md:h-[70vh]">
        <div class="w-full md:w-1/2 md:mt-10 overflow-auto">
          <form class="w-full text-center md:text-left">
            <input-radio
              question="გაქვს გადატანილი Covid-19?*"
              name="had_covid"
              :options="[
                { text: 'კი', value: 'yes' },
                { text: 'არა', value: 'no' },
                { text: 'ახლა მაქვს', value: 'have_right_now' },
              ]"
              :selected-value="hadCovidValue"
              vuex-mutation="updateHadCovid"
            />

            <div v-if="hadCovidValue === 'yes'">
              <input-radio
                question="ანტისხეულების ტესტი გაქვს გაკეთებული?*"
                name="antibodies_test"
                :options="[
                  { text: 'კი', value: 'yes' },
                  { text: 'არა', value: 'no' },
                ]"
                :selected-value="hadAntibodyTestValue"
                vuex-mutation="updateHadAntibodyTest"
              />

              <div v-if="hadAntibodyTestValue === 'yes'">
                <basic-input
                  question="თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*"
                  type="date"
                  name="had_covid_date"
                  :value="antibodiesValue.covid_date"
                  vuex-mutation="updateAntibodies"
                  rules="required"
                />
                <basic-input
                  question=""
                  type="number"
                  name="had_covid_date"
                  placeholder="ანტისხეულების რაოდენობა"
                  :value="antibodiesValue.number"
                  vuex-mutation="updateAntibodiesNumber"
                  rules="required"
                />
              </div>
              <basic-input
                v-if="hadAntibodyTestValue === 'no'"
                question="მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*"
                type="date"
                name="had_covid_date"
                placeholder="დდ/თთ/წწ"
                :value="whenCovidValue"
                vuex-mutation="updateWhenCovid"
                rules="required"
              />
            </div>
          </form>
        </div>
        <section-image :image="vaccine"></section-image>
      </div>
      <Navigation
        prev-page="question1"
        next-page="question3"
        :form-is-valid="meta.valid"
      ></Navigation>
    </Form>
  </Layout>
</template>

<script>
import CommonHeader from "@/components/layouts/CommonHeader.vue";
import Layout from "@/components/layouts/Layout.vue";
import InputRadio from "@/components/UI/inputs/InputRadio.vue";
import BasicInput from "@/components/UI/inputs/BasicInput.vue";
import Navigation from "@/components/layouts/Navigation";
import SectionImage from "@/components/layouts/SectionImage";
import vaccine from "@/assets/images/scan-vaccinate.png";
import { mapState } from "vuex";
import { Form } from "vee-validate";

export default {
  name: "CovidState",
  components: {
    CommonHeader,
    Layout,
    InputRadio,
    BasicInput,
    Navigation,
    SectionImage,
    Form
  },
  data() {
    return {
      vaccine: vaccine
    };
  },
  computed: {
    ...mapState({
      hadCovidValue: (state) => state.CovidState.had_covid,
      hadAntibodyTestValue: (state) => state.CovidState.had_antibody_test,
      whenCovidValue: (state) => state.CovidState.covid_date,
      antibodiesValue: (state) => state.CovidState.antibodies
    })
  }
  // methods: {
  //   validateForm() {
  //     if (
  //       this.hadCovidValue === "no" ||
  //       this.hadCovidValue === "have_right_now"
  //     ) {
  //       this.$store.commit("updateCovidStateIsValid", true);
  //     }
  //     if (this.hadCovidValue === "yes") {
  //       this.$store.commit("updateCovidStateIsValid", false);
  //
  //       if (this.hadAntibodyTestValue === "yes") {
  //         if (
  //           this.antibodiesValue.covid_date === "" &&
  //           this.antibodiesValue.number === ""
  //         ) {
  //           this.$store.commit("updateCovidStateIsValid", false);
  //         } else if (
  //           this.antibodiesValue.covid_date !== "" &&
  //           this.antibodiesValue.number !== ""
  //         ) {
  //           this.$store.commit("updateCovidStateIsValid", true);
  //         }
  //       }
  //       if (this.hadAntibodyTestValue === "no") {
  //         if (this.whenCovidValue === "") {
  //           this.$store.commit("updateCovidStateIsValid", false);
  //         } else {
  //           this.$store.commit("updateCovidStateIsValid", true);
  //         }
  //       }
  //     }
  //   },
  // },
};
</script>
