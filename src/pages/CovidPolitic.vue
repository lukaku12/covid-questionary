<template>
  <Layout>
    <CommonHeader page="4" />
    <div class="flex justify-between font-helvetica">
      <div class="max-w-lg">
        რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
        რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
        განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან
        გადმოსვლის. პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ
        და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
        <form>
          <input-radio
            question="რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*"
            name="frequency"
            :options="[
              { text: 'კვირაში ორჯერ', value: 'twice_per_week' },
              { text: 'კვირაში ერთხელ', value: 'once_per_week' },
              { text: 'ორ კვირაში ერთხელ', value: 'once_per_two_weeks' },
              { text: 'ორ კვირაში ერთხელ', value: 'once_per_month' },
            ]"
            :selected-value="onlineMeetingsValue"
            :update-value="updateOnlineMeetingsValue"
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
            :selected-value="fromOfficeValue"
            :update-value="updateFromOfficeValue"
          />

          <input-textarea
            question="რას ფიქრობ ფიზიკურ შეკრებებზე?"
            name="gatherings"
          />

          <input-textarea
            question="რას ფიქრობ არსებულ გარემოზე:<br />რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
            name="environment"
          />
        </form>

        <div>
          <span> 👉</span>
          <a href="https://booking.moh.gov.ge/" class="text-[#1289AE]">
            https://booking.moh.gov.ge/
          </a>
        </div>
        <Navigation prev-page="question3" next-page="thank-you"></Navigation>
      </div>

      <div>
        <img
          class="max-w-xl"
          src="../assets/images/scan-bike-boy.png"
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
import InputTextarea from "../components/UI/inputs/InputTextarea.vue";
import Navigation from "@/components/layouts/Navigation";

export default {
  name: "CovidPolitic",
  components: {
    CommonHeader,
    Layout,
    InputRadio,
    InputTextarea,
    Navigation,
  },
  computed: {
    onlineMeetingsValue() {
      return this.$store.getters.hadCovid;
    },
    fromOfficeValue() {
      return this.$store.getters.hadCovidTest;
    },
  },
  methods: {
    updateOnlineMeetingsValue(e) {
      this.$store.commit("updateOnlineMeetings", e.target.value);
    },
    updateFromOfficeValue(e) {
      this.$store.commit("updateFromOffice", e.target.value);
    },
  },
};
</script>
