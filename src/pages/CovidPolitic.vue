<template>
  <Layout>
    <CommonHeader page="4" />
    <div class="flex justify-between font-helvetica flex w-full md:h-[70vh]">
      <div class="w-full md:w-1/2 overflow-auto">
        <p>
          რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
          რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
          განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან
          გადმოსვლის. <br> <br> პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ
          და ყოველდღიური კომუნიკაციაც გაიშვიათდა. <br> <br> <br>
        </p>
        <form class="w-full text-center md:text-left">
          <input-radio
            question="რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*"
            name="frequency"
            :options="[
              { text: 'კვირაში ორჯერ', value: 'twice_per_week' },
              { text: 'კვირაში ერთხელ', value: 'once_per_week' },
              { text: 'ორ კვირაში ერთხელ', value: 'once_per_two_weeks' },
              { text: 'თვეში ერთხელ', value: 'once_per_month' },
            ]"
            :selected-value="nonFormalMeetingsValue"
            :update-value="updateNonFormalMeetingsValue"
          />

          <input-radio
            question="კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*"
            name="from_office"
            :options="[
              { text: 0, value: 0 },
              { text: 1, value: 1 },
              { text: 2, value: 2 },
              { text: 3, value: 3 },
              { text: 4, value: 4 },
              { text: 5, value: 5 },
            ]"
            :selected-value="numberOfDaysFromOfficeValue"
            :update-value="updateNumberOfDaysFromOfficeValue"
          />

          <input-textarea
            question="რას ფიქრობ ფიზიკურ შეკრებებზე?"
            name="gatherings"
            :value="whatAboutMeetingsInLiveValue"
            :update-value="updateWhatAboutMeetingsInLiveValue"
          />

          <input-textarea
            question="რას ფიქრობ არსებულ გარემოზე:<br />რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
            name="environment"
            :value="tellUsYourOpinionAboutUsValue"
            :update-value="updateTellUsYourOpinionAboutUsValue"
          />
        </form>
        <Navigation
          prev-page="question3"
          next-page="thank-you"
          :validate-form=""
        ></Navigation>
      </div>
      <section-image :image="guyOnBike"></section-image>
    </div>
  </Layout>
</template>

<script>
import CommonHeader from "../components/layouts/CommonHeader.vue";
import Layout from "../components/layouts/Layout.vue";
import InputRadio from "../components/UI/inputs/InputRadio.vue";
import InputTextarea from "../components/UI/inputs/InputTextarea.vue";
import Navigation from "@/components/layouts/Navigation";
import SectionImage from "@/components/layouts/SectionImage";
import guyOnBike from  '../assets/images/scan-bike-boy.png'


export default {
  name: "CovidPolitic",
  components: {
    SectionImage,
    CommonHeader,
    Layout,
    InputRadio,
    InputTextarea,
    Navigation
  },
  data() {
    return {
      guyOnBike: guyOnBike
    }
  },
  computed: {
    nonFormalMeetingsValue() {
      return this.$store.getters.nonFormalMeetings;
    },
    numberOfDaysFromOfficeValue() {
      return this.$store.getters.numberOfDaysFromOffice;
    },
    whatAboutMeetingsInLiveValue() {
      return this.$store.getters.whatAboutMeetingsInLive;
    },
    tellUsYourOpinionAboutUsValue() {
      return this.$store.getters.tellUsYourOpinionAboutUs;
    }
  },
  methods: {
    updateNonFormalMeetingsValue(e) {
      this.$store.commit("updateNonFormalMeetings", e.target.value);
    },
    updateNumberOfDaysFromOfficeValue(e) {
      this.$store.commit("updateNumberOfDaysFromOffice", e.target.value);
    },
    updateWhatAboutMeetingsInLiveValue(e) {
      this.$store.commit("updateWhatAboutMeetingsInLive", e.target.value);
    },
    updateTellUsYourOpinionAboutUsValue(e) {
      this.$store.commit("updateTellUsYourOpinionAboutUs", e.target.value);
    }
  }
};
</script>
