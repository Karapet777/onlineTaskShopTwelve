import { useState } from "react";

const useOnlineShope = () => {
  const [showComponent, setShowComponent] = useState(false);

  const toggolComponentDelivery = () => {
    setShowComponent(!showComponent);
  };
  const toggolComponentPayment = () => {
    setShowComponent(false);
  };
  
  return {
    showComponent,
    toggolComponentDelivery,
    toggolComponentPayment,
  };
};

export default useOnlineShope;
