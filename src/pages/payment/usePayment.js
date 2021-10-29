import { useState } from "react";

const usePayment = (toggleSuccessPage) => {
  const [successPage, setSuccessPage] = useState(false);
  console.log();

  const handleSubmit = (values) => {
    toggleSuccessPage();
    setSuccessPage(true);
  };
  const initialValues = {
    cardName: "",
    cardNumber: "",
    mmyy: "",
    cvv: "",
  };

  return { handleSubmit, initialValues, successPage, toggleSuccessPage };
};

export default usePayment;
