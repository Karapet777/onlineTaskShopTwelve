import React from "react";
import iconDone from "../../assets/done.png";

import './Success.scss'

const SuccessPage = () => {
  return (
    <div className='successPage-container'>
      <img src={iconDone} alt="iconDone" />
      <p  className='successPage-container_title'>Спасибо!</p>
    </div>
  );
};

export default SuccessPage;
