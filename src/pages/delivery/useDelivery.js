import { useState, useMemo } from "react";
import countryList from "react-select-country-list";

const useDelivery = (toggolComponentDelivery) => {
  const [value, setValue] = useState("");

  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  const handleSubmit = (values) => {
    toggolComponentDelivery()
  };

  const initialValues = {
    lastName: "",
    city: "",
    address: "",
  };

  return { changeHandler, options, value, handleSubmit, initialValues };
};

export default useDelivery;
