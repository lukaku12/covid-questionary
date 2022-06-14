<template>
  <Layout>
    <CommonHeader page="3" />
    <div class="flex justify-between font-helvetica">
      <div>
        <form>
          <input-radio
            question="უკვე აცრილი ხარ?*"
            name="vaccinated"
            :options="[
              { text: 'კი', value: 'yes' },
              { text: 'არა', value: 'no' },
            ]"
            :selected-value="hadVaccineValue"
            :update-value="updateVaccineValue"
          />

          <input-radio
            question="რას ელოდები?*"
            name="waiting_for"
            :options="[
              {
                text: 'დარეგისტრირებული ვარ და ველოდები რიცხვს',
                value: 'vaccinating_date',
              },
              { text: 'არ ვგეგმავ', value: 'not_planning' },
              {
                text: 'გადატანილი მაქვს და ვგეგმავ აცრას',
                value: 'already_had',
              },
            ]"
            :selected-value="whatAreYouWaitingValue"
            :update-value="updateWhatAreYouWaitingValue"
          />

          <basic-input
            question="მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*"
            type="date"
            name="planned_date"
            :value="vaccineDateValue"
            :update-value="updateVaccineDateValue"
          />
        </form>

        <div>
          <span> 👉</span>
          <a href="https://booking.moh.gov.ge/" class="text-[#1289AE]">
            https://booking.moh.gov.ge/
          </a>
        </div>
        <Navigation prev-page="question2" next-page="question4"></Navigation>
      </div>

      <div>
        <img
          class="max-w-xl"
          src="../assets/images/scan-doctor.png"
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
  name: "AreYouVaccinated",
  components: {
    CommonHeader,
    Layout,
    InputRadio,
    BasicInput,
    Navigation,
  },
  computed: {
    hadVaccineValue() {
      return this.$store.getters.hadVaccine;
    },
    whatAreYouWaitingValue() {
      return this.$store.getters.whatAreYouWaiting;
    },
    vaccineDateValue() {
      return this.$store.getters.vaccineDate;
    },
  },
  methods: {
    updateVaccineValue(e) {
      this.$store.commit("updateHadVaccine", e.target.value);
    },
    updateWhatAreYouWaitingValue(e) {
      this.$store.commit("updateWhatAreYouWaiting", e.target.value);
    },
    updateVaccineDateValue(e) {
      this.$store.commit("updateVaccineDate", e.target.value);
    },
  },
};
</script>
