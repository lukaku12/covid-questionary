<template>
  <Layout>
    <CommonHeader page="1" />
    <div class="flex justify-between font-helvetica w-full md:h-[70vh]">
      <div class="w-full md:w-1/2 md:mt-10">
        <Form class="w-full text-center md:text-left">
          <basic-input
            question="სახელი*"
            type="text"
            name="name"
            placeholder="იოსებ"
            :value="nameValue"
            :update-value="updateNameValue"
            rules="required|min-length:3|max-length:255"
          />
          <basic-input
            question="გვარი*"
            type="text"
            name="lastname"
            placeholder="ჯუღაშვილი"
            :value="lastNameValue"
            :update-value="updateLastNameValue"
            rules="required|min-length:3|max-length:255"
          />
          <basic-input
            question="მეილი*"
            type="email"
            name="email"
            placeholder="fbi@redberry.ge"
            :value="emailValue"
            :update-value="updateEmailValue"
            rules="required|min-length:3|max-length:255|correct-email|redberry-email"
          />
        </Form>
        <small-footer text="*-ით მონიშნული ველების შევსება სავალდებულოა" />
      </div>
      <section-image :image="image"></section-image>
    </div>
    <Navigation prev-page="start-question" next-page="question2"></Navigation>
  </Layout>
</template>

<script>
import CommonHeader from "@/components/layouts/CommonHeader.vue";
import Layout from "@/components/layouts/Layout.vue";
import BasicInput from "@/components/UI/inputs/BasicInput.vue";
import SmallFooter from "@/components/UI/SmallFooter.vue";
import Navigation from "@/components/layouts/Navigation";
import SectionImage from "@/components/layouts/SectionImage";
import scanBoyAndGirl from "@/assets/images/scan-boy-and-girl.png";
import { Form } from "vee-validate";

export default {
  name: "PersonalInformation",
  components: {
    CommonHeader,
    Layout,
    BasicInput,
    SmallFooter,
    Navigation,
    SectionImage,
    Form,
  },
  data() {
    return {
      image: scanBoyAndGirl,
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
    },
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
  },
};
</script>
