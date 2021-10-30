import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  lastName: Yup.string().matches(/^([^0-9]*)$/, 'только буквы')
  .required("обязательная поля"),
  address :Yup.string()
  .required("обязательная поля"),
  city: Yup.string()
  .required("обязательная поля"),
});
