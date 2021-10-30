const usePayment = (toggleSuccessPage) => {
  const handleSubmit = (values) => {
    toggleSuccessPage();
  };

  const initialValues = {
    cardName: "",
    cardNumber: "",
    mmyy: "",
    cvv: "",
  };

  return { handleSubmit, initialValues, toggleSuccessPage };
};

export default usePayment;
