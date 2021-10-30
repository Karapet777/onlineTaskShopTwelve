import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  cardName: Yup.string().matches(/^([^0-9]*)$/, 'только буквы')
  .required("обязательная поля"),

  cardNumber: Yup.string().typeError("только цифры")
  .min(16, 'Пароль должен содержать 16 символов')
    .required("обязательная поля"),

  mmyy:Yup.number().typeError("только цифры")
    .required("обязательная поля"),

  cvv:Yup.number().typeError("только цифры")
    .required("обязательная поля"),
});
