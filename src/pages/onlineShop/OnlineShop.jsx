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
    toggleSuccessPage,
    successPage
  } = useOnlineShop();

  return (
    <div className={successPage ? `OnlineShop-container sccessStyle` : `OnlineShop-container`}>
      {successPage ? <SuccessPage/> :
      <>
       <div className="OnlineShop-container_block-nav">
       <span>Доставка</span>
       <img src={Row} alt="row" />
       <span onClick={toggolComponentDelivery}>Оплата</span>
     </div>
     { showComponent ? 
      <Payment  toggleSuccessPage={toggleSuccessPage}/>
    : 
      <Delivery toggolComponentDelivery={toggolComponentDelivery} />}
   </>
     
      }
     
    </div>
  );
};

export default OnlineShop;
