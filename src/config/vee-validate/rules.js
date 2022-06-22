import { defineRule } from "vee-validate";
import { required, email, min, max } from '@vee-validate/rules';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);

defineRule("redberry_email", (value, _, name) => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@redberry.ge$/;
  if (!value || !value.length) {
    return true;
  }
  if (!reg.test(name.value)) {
    return `გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)`;
  }
  return true;
});
