import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  cardName: Yup.string().required("обязательная поля"),
  cardNumber: Yup.string()
    .matches(/^([^0-9]*)$/, "только цифры")
    .required("обязательная поля"),
  mmyy: Yup.string()
    .matches(/^([^0-9]*)$/, "только цифры")
    .required("обязательная поля"),
  cvv: Yup.string()
    .matches(/^([^0-9]*)$/, "только цифры")
    .required("обязательная поля"),
});
