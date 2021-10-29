import React from "react";
import Delivery from "../delivery/Delivery";
import Payment from "../payment/Payment";
import SuccessPage from "../success/Success";
import Row from "./../../assets/row.png";
import useOnlineShop from "./useOnlineShop";

import "./OnlineShop.scss";

const OnlineShop = () => {
  const {
    showComponent,
    toggolComponentDelivery,
    toggolComponentPayment,
  } = useOnlineShop();

  return (
    <div className="OnlineShop-container">
      <div className="OnlineShop-container_block-nav">
        <span onClick={toggolComponentPayment}>Доставка</span>
        <img src={Row} alt="row" />
        <span onClick={toggolComponentDelivery}>Оплата</span>
      </div>
      {showComponent ? (
        <Payment  />
      ) : (
        <Delivery toggolComponentDelivery={toggolComponentDelivery} />
      )}
    </div>
  );
};

export default OnlineShop;
