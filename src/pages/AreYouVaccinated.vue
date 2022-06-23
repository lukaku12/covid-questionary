<template>
  <Layout>
    <CommonHeader page="3" />
    <div class="flex justify-between font-helvetica w-full md:h-[70vh]">
      <div class="w-full md:w-1/2 md:mt-10 overflow-auto">
        <form class="w-full text-center md:text-left">
          <input-radio
            question="უკვე აცრილი ხარ?*"
            name="vaccinated"
            :options="[
              { text: 'კი', value: 'yes' },
              { text: 'არა', value: 'no' },
            ]"
            :selected-value="hadVaccineValue"
            vuex-mutation="updateHadVaccine"
            :validate="validateForm"
          />
          <div v-if="hadVaccineValue === 'no'">
            <input-radio
              question="რას ელოდები?*"
              name="waiting_for"
              :options="[
                {
                  text: 'დარეგისტრირებული ვარ და ველოდები რიცხვს',
                  value: 'registered_and_waiting',
                },
                { text: 'არ ვგეგმავ', value: 'not_planning' },
                {
                  text: 'გადატანილი მაქვს და ვგეგმავ აცრას',
                  value: 'had_covid_and_planning_to_be_vaccinated',
                },
              ]"
              :selected-value="whatAreYouWaitingValue"
              vuex-mutation="updateWhatAreYouWaiting"
              :validate="validateForm"
            />
            <small-footer
              v-if="
                whatAreYouWaitingValue ===
                'had_covid_and_planning_to_be_vaccinated'
              "
              text="ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.
                    </br></br>
                    👉 რეგისტრაციის ბმული
                    <a href='https://booking.moh.gov.ge/'>
                        https://booking.moh.gov.ge/
                    </a>
            "
            ></small-footer>
            <small-footer
              v-if="whatAreYouWaitingValue === 'not_planning'"
              text="👉 <a href='https://booking.moh.gov.ge/'>https://booking.moh.gov.ge/</a>"
            >
            </small-footer>
          </div>

          <div v-if="hadVaccineValue === 'yes'">
            <input-radio
              question="აირჩიე რა ეტაპზე ხარ*"
              name="choose_your_stage"
              :options="[
                {
                  text: 'პირველი დოზა და დარეგისტრირებული ვარ მეორეზე',
                  value: 'first_dosage_and_registered_on_the_second',
                },
                { text: 'სრულად აცრილი ვარ', value: 'fully_vaccinated' },
                {
                  text: 'პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე',
                  value: 'first_dosage_and_not_registered_yet',
                },
              ]"
              :selected-value="vaccinationStageValue"
              vuex-mutation="updateVaccinationStage"
              :validate="validateForm"
            />
            <small-footer
              v-if="
                hadVaccineValue === 'yes' &&
                vaccinationStageValue === 'first_dosage_and_not_registered_yet'
              "
              text="რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი
                    </br></br>
                    👉 რეგისტრაციის ბმული
                    <a href='https://booking.moh.gov.ge/'>
                        https://booking.moh.gov.ge/
                    </a>
            "
            ></small-footer>
          </div>
        </form>
      </div>
      <section-image :image="doctor"></section-image>
    </div>
    <Navigation
      prev-page="question2"
      next-page="question4"
      :validate-form="validateForm"
    ></Navigation>
  </Layout>
</template>

<script>
import CommonHeader from "@/components/layouts/CommonHeader.vue";
import Layout from "@/components/layouts/Layout.vue";
import InputRadio from "@/components/UI/inputs/InputRadio.vue";
import Navigation from "@/components/layouts/Navigation";
import SmallFooter from "@/components/UI/SmallFooter";
import SectionImage from "@/components/layouts/SectionImage";
import doctor from "@/assets/images/scan-doctor.png";
import { mapState } from "vuex";

export default {
  name: "AreYouVaccinated",
  components: {
    CommonHeader,
    Layout,
    InputRadio,
    Navigation,
    SmallFooter,
    SectionImage,
  },
  data() {
    return {
      doctor: doctor,
    };
  },
  computed: {
    ...mapState({
      hadVaccineValue: (state) => state.AreYouVaccinated.had_vaccine,
      vaccinationStageValue: (state) =>
        state.AreYouVaccinated.vaccination_stage,
      whatAreYouWaitingValue: (state) =>
        state.AreYouVaccinated.what_are_you_waiting_for,
    }),
  },
  methods: {
    validateForm() {
      if (this.hadVaccineValue === "yes") {
        if (this.vaccinationStageValue !== "") {
          this.$store.commit("updateVaccineStateIsValid", true);
        }
        if (this.vaccinationStageValue === "") {
          this.$store.commit("updateVaccineStateIsValid", false);
        }
      }
      if (this.hadVaccineValue === "no") {
        if (this.whatAreYouWaitingValue !== "") {
          this.$store.commit("updateVaccineStateIsValid", true);
        }
        if (this.whatAreYouWaitingValue === "") {
          this.$store.commit("updateVaccineStateIsValid", false);
        }
      }
    },
  },
};
</script>
