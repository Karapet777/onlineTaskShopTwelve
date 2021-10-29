import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  lastName: Yup.string().required('обязательная поля'),
  address: Yup.string().required('обязательная поля'),
  city:Yup.string().required('обязательная поля')
});
