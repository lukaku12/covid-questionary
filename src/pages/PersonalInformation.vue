<template>
  <Layout>
    <CommonHeader page="1" />
    <div class="flex justify-between font-helvetica">
      <div>
        <form>
          <basic-input
            question="სახელი*"
            type="text"
            name="name"
            :value="nameValue"
            :error-msg="nameError"
            :update-value="updateNameValue"
          />
          <basic-input
            question="გვარი*"
            type="text"
            name="surname"
            :value="lastNameValue"
            :error-msg="lastNameError"
            :update-value="updateLastNameValue"
          />
          <basic-input
            question="მეილი*"
            type="email"
            name="email"
            :value="emailValue"
            :error-msg="emailError"
            :update-value="updateEmailValue"
          />
        </form>
        <small-footer text="*-ით მონიშნული ველების შევსება სავალდებულოა" />
      </div>
      <div>
        <img src="../assets/images/scan-boy-and-girl.png" alt="boy-and-girl" />
      </div>
    </div>
    <Navigation
      prev-page="start-question"
      next-page="question2"
      :validate-form="validateForm"
    ></Navigation>
  </Layout>
</template>

<script>
import CommonHeader from "../components/layouts/CommonHeader.vue";
import Layout from "../components/layouts/Layout.vue";
import BasicInput from "../components/UI/inputs/BasicInput.vue";
import SmallFooter from "../components/UI/SmallFooter.vue";
import Navigation from "@/components/layouts/Navigation";

export default {
  name: "PersonalInformation",
  components: {
    CommonHeader,
    Layout,
    BasicInput,
    SmallFooter,
    Navigation
  },
  data() {
    return {
      nameError: "",
      lastNameError: "",
      emailError: "",
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    };
  },
  computed: {
    nameValue() {
      return this.$store.getters.firstName;
    },
    lastNameValue() {
      return this.$store.getters.lastName;
    },
    emailValue() {
      return this.$store.getters.email;
    }
  },
  methods: {
    updateNameValue(e) {
      this.$store.commit("updateFirstName", e.target.value);
    },
    updateLastNameValue(e) {
      this.$store.commit("updateLastName", e.target.value);
    },
    updateEmailValue(e) {
      this.$store.commit("updateEmail", e.target.value);
    },
    validateForm() {
      // validate name
      if (this.nameValue.length <= 3) {
        this.nameError = "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან";
      } else if (this.nameValue.length >= 255) {
        this.nameError =
          "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
      } else {
        this.nameError = "";
      }
      // validate last name
      if (this.lastNameValue.length <= 3) {
        this.lastNameError =
          "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან";
      } else if (this.lastNameValue.length >= 255) {
        this.lastNameError =
          "გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
      } else {
        this.lastNameError = "";
      }
      // validate email
      if (this.emailValue.length === 0) {
        this.emailError = "ემაილის ველი აუცილებელია";
      } else if (!this.reg.test(this.emailValue)) {
        this.emailError = "თქვენ მიერ შეყვანილი მეილი არასწორია";
      } else {
        this.emailError = "";
      }
      if (
        this.nameError === "" &&
        this.lastNameError === "" &&
        this.emailError === ""
      ) {
        this.$store.commit("updatePersonalInfoIsValid", true);
      }
    }
  }
};
</script>
