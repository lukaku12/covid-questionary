<template>
  <Layout>
    <CommonHeader page="1" />
    <div class="flex justify-between font-helvetica flex w-full md:h-[70vh]">
      <div class="w-full md:w-1/2 md:mt-10 ">
        <form class="w-full text-center md:text-left">
          <basic-input
            question="სახელი*"
            type="text"
            name="name"
            placeholder="იოსებ"
            :value="nameValue"
            :error-msg="nameError"
            :update-value="updateNameValue"
          />
          <basic-input
            question="გვარი*"
            type="text"
            name="surname"
            placeholder="ჯუღაშვილი"
            :value="lastNameValue"
            :error-msg="lastNameError"
            :update-value="updateLastNameValue"
          />
          <basic-input
            question="მეილი*"
            type="email"
            name="email"
            placeholder="fbi@redberry.ge"
            :value="emailValue"
            :error-msg="emailError"
            :update-value="updateEmailValue"
          />
        </form>
        <small-footer text="*-ით მონიშნული ველების შევსება სავალდებულოა" />
      </div>
      <section-image :image="image"></section-image>
    </div>
    <Navigation
      prev-page="start-question"
      next-page="question2"
    ></Navigation>
  </Layout>
</template>

<script>
import CommonHeader from "../components/layouts/CommonHeader.vue";
import Layout from "../components/layouts/Layout.vue";
import BasicInput from "../components/UI/inputs/BasicInput.vue";
import SmallFooter from "../components/UI/SmallFooter.vue";
import Navigation from "@/components/layouts/Navigation";
import SectionImage from "@/components/layouts/SectionImage";
import scanBoyAndGirl from "../assets/images/scan-boy-and-girl.png";

export default {
  name: "PersonalInformation",
  components: {
    CommonHeader,
    Layout,
    BasicInput,
    SmallFooter,
    Navigation,
    SectionImage
  },
  data() {
    return {
      image: scanBoyAndGirl,
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
      setTimeout(this.validateFirstNameInput, 700)
      ;
    },
    updateLastNameValue(e) {
      this.$store.commit("updateLastName", e.target.value);
      setTimeout(this.validateLastNameInput, 700);
    },
    updateEmailValue(e) {
      this.$store.commit("updateEmail", e.target.value);
      setTimeout(this.validateEmailInput, 700);
    },
    validateFirstNameInput() {
      if (this.nameValue.length <= 3) {
        this.nameError = "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან";
        this.$store.commit("updatePersonalInfoIsValid", false);
      } else if (this.nameValue.length >= 255) {
        this.nameError = "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
        this.$store.commit("updatePersonalInfoIsValid", false);
      } else {
        this.nameError = null;
        this.validateForm()
      }
    },
    validateLastNameInput() {
      if (this.lastNameValue.length <= 3) {
        this.lastNameError = "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან";
        this.$store.commit("updatePersonalInfoIsValid", false);
      } else if (this.lastNameValue.length >= 255) {
        this.lastNameError = "გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
        this.$store.commit("updatePersonalInfoIsValid", false);
      } else {
        this.lastNameError = null;
      }
      this.validateForm()
    },
    validateEmailInput() {
      if (this.emailValue.length === 0) {
        this.emailError = "ემაილის ველი აუცილებელია";
        this.$store.commit("updatePersonalInfoIsValid", false);
      } else if (!this.reg.test(this.emailValue)) {
        this.emailError = "თქვენ მიერ შეყვანილი მეილი არასწორია";
        this.$store.commit("updatePersonalInfoIsValid", false);
      } else if (!this.emailValue.includes("redberry.ge")) {
        this.emailError = "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)";
        this.$store.commit("updatePersonalInfoIsValid", false);
      } else {
        this.emailError = null;
        this.validateForm()
      }
    },
    validateForm() {
      if (this.nameError === null && this.lastNameError === null && this.emailError === null) {
        this.$store.commit("updatePersonalInfoIsValid", true);
      }
    }
  }
};
</script>
