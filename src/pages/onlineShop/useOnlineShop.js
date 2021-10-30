import { useState } from "react";

const useOnlineShope = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [successPage, setSuccessPage] = useState(false);

  const toggolComponentDelivery = () => {
    setShowComponent(!showComponent);
  };
  const toggleSuccessPage = () => {
    setSuccessPage(true);
  }
  
  return {
    showComponent,
    toggolComponentDelivery,
    toggleSuccessPage,
    successPage
  };
};

export default useOnlineShope;
