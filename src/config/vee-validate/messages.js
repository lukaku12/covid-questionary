import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";

configure({
  generateMessage: localize('ka', {
    messages: {
      required: '{field} ველი აუცილებელია',
      email: 'თქვენ მიერ შეყვანილი მეილი არასწორია',
      min: '{field} უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
      max: '{field} უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან',
    },
  }),
});
