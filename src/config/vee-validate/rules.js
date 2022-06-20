import { defineRule } from "vee-validate";

defineRule("required", (value, _, name) => {
  if (!value || !value.length) {
    return `${name.field} ველი აუცილებელია`;
  }
  return true;
});

defineRule("min-length", (value, [limit], name) => {
  if (!value || !value.length) {
    return false;
  }
  if (value.length < limit) {
    return `${name.field} ველი უნდა შედგებოდეს მინიმუმ ${limit} სიმბოლოსგან `;
  }
  return true;
});

defineRule("max-length", (value, [limit], name) => {
  if (!value || !value.length) {
    return false;
  }
  if (value.length > limit) {
    return `${name.field} ველი უნდა შედგებოდეს მაქსიმუმ ${limit} სიმბოლოსგან`;
  }
  return true;
});

defineRule("correct-email", (value, _, name) => {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!value || !value.length) {
    return false;
  }
  if (!reg.test(name.value)) {
    return `თქვენ მიერ შეყვანილი მეილი არასწორია`;
  }
  return true;
});

defineRule("redberry-email", (value, _, name) => {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@redberry.ge$/
  if (!value || !value.length) {
    return false;
  }
  if (!reg.test(name.value)) {
    return `გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)`;
  }
  return true;
});
