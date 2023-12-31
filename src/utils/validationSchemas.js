import * as Yup from "yup";

const NAME_SCHEMA = Yup.string("Error type! value must be string")
  .trim()
  .required("Required!")
  .matches(/^[A-Z][a-z]{1,31}$/, "Перша буква повинна бути велика!");

export const SIGN_UP_USER_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  email: Yup.string("Error type! value must be string")
    .trim()
    .required("Required!")
    .email()
    .min(7, "Min length must 7")
    .max(64, "Max length must 64"),
  age: Yup.number().integer(),
  isMale: Yup.boolean().required(),
  password: Yup.string("Error type! value must be string")
    .trim()
    .required("Required!")
    .matches(/.{8,128}/, "Check yuor password"),
});

