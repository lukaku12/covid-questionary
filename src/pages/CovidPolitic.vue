<template>
  <Layout>
    <CommonHeader page="4" />
    <div
      class="flex justify-between font-helvetica w-full h-[70vh] md:h-[70vh]"
    >
      <div class="w-full md:w-1/2 overflow-auto relative">
        <p>
          რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
          რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
          განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
          ჩვენთან გადმოსვლის. <br />
          <br />
          პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
          ყოველდღიური კომუნიკაციაც გაიშვიათდა. <br />
          <br />
          <br />
        </p>
        <form class="w-full text-center md:text-left">
          <input-radio
            question="რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*"
            name="frequency"
            :options="[
              { text: 'კვირაში ორჯერ', value: 'twice_a_week' },
              { text: 'კვირაში ერთხელ', value: 'once_a_week' },
              { text: 'ორ კვირაში ერთხელ', value: 'once_in_a_two_weeks' },
              { text: 'თვეში ერთხელ', value: 'once_in_a_month' },
            ]"
            :selected-value="nonFormalMeetingsValue"
            vuex-property-name="updateNonFormalMeetings"
            :validate="validateForm"
          />

          <input-radio
            question="კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*"
            name="from_office"
            :options="[
              { text: 0, value: '0' },
              { text: 1, value: '1' },
              { text: 2, value: '2' },
              { text: 3, value: '3' },
              { text: 4, value: '4' },
              { text: 5, value: '5' },
            ]"
            :selected-value="numberOfDaysFromOfficeValue"
            vuex-property-name="updateNumberOfDaysFromOffice"
            :validate="validateForm"
          />

          <input-textarea
            question="რას ფიქრობ ფიზიკურ შეკრებებზე?"
            name="gatherings"
            :value="whatAboutMeetingsInLiveValue"
            vuex-property-name="updateWhatAboutMeetingsInLive"
          />

          <input-textarea
            question="რას ფიქრობ არსებულ გარემოზე:<br />რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
            name="environment"
            :value="tellUsYourOpinionAboutUsValue"
            vuex-property-name="updateTellUsYourOpinionAboutUs"
          />
          <SubmitFormButton></SubmitFormButton>
        </form>
      </div>
      <section-image :image="guyOnBike"></section-image>
    </div>
    <Navigation
      prev-page="question3"
      next-page="thank-you"
      :validate-form="validateForm"
    ></Navigation>
  </Layout>
</template>

<script>
import CommonHeader from "@/components/layouts/CommonHeader.vue";
import Layout from "@/components/layouts/Layout.vue";
import InputRadio from "@/components/UI/inputs/InputRadio.vue";
import InputTextarea from "@/components/UI/inputs/InputTextarea.vue";
import Navigation from "@/components/layouts/Navigation";
import SectionImage from "@/components/layouts/SectionImage";
import guyOnBike from "@/assets/images/scan-bike-boy.png";
import SubmitFormButton from "@/components/layouts/SubmitFormButton";
import { mapState } from "vuex";

export default {
  name: "CovidPolitic",
  components: {
    SectionImage,
    CommonHeader,
    Layout,
    InputRadio,
    InputTextarea,
    Navigation,
    SubmitFormButton,
  },
  data() {
    return {
      guyOnBike: guyOnBike,
    };
  },
  computed: {
    ...mapState({
      nonFormalMeetingsValue: (state) => state.CovidPolitic.non_formal_meetings,
      numberOfDaysFromOfficeValue: (state) =>
        state.CovidPolitic.number_of_days_from_office,
      whatAboutMeetingsInLiveValue: (state) =>
        state.CovidPolitic.what_about_meetings_in_live,
      tellUsYourOpinionAboutUsValue: (state) =>
        state.CovidPolitic.tell_us_your_opinion_about_us,
    }),
  },
  methods: {
    validateForm() {
      if (
        this.nonFormalMeetingsValue === "" &&
        this.numberOfDaysFromOfficeValue === ""
      ) {
        this.$store.commit("updateCovidPoliticIsValid", false);
      }
      if (
        this.nonFormalMeetingsValue !== "" &&
        this.numberOfDaysFromOfficeValue !== ""
      ) {
        this.$store.commit("updateCovidPoliticIsValid", true);
      }
    },
  },
};
</script>
