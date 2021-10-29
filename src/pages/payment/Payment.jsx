import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { validationSchema } from "./validationSchema";
import usePayment from "./usePayment";
import SuccessPage from "../success/Success";

import "./Payment.scss";

const Payment = () => {
  const { handleSubmit, initialValues, successPage } =
    usePayment();

  return (
    <div className="payment-container">
      {!successPage ? (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <p className="payment-container_title">Оплата</p>
            <div className="delivery-container_block-lastName">
              <div>
                <p>Имя на карте</p>
                <Field
                  className="payment-container_input"
                  name="cardName"
                  type="text"
                  placeholder="Имя на карте"
                />
                <ErrorMessage
                  className="text-red"
                  name="cardName"
                  component="div"
                />
              </div>
              <div>
                <p>Номер карты</p>
                <Field
                  className="payment-container_input"
                  name="cardNumber"
                  type="text"
                  placeholder="XXXX XXXX XXXX XXXX XXXX"
                />
                <ErrorMessage
                  className="text-red"
                  name="cardNumber"
                  component="div"
                />
              </div>
            </div>
            <div className="payment-container_block">
              <div>
                <p>Срок</p>
                <Field
                  className="payment-container_block_MM-YY"
                  name="mmyy"
                  type="text"
                  placeholder="MM / YY"
                />
                <ErrorMessage
                  className="text-red"
                  name="cardNumber"
                  component="div"
                />
              </div>
              <div>
                <p>CVV</p>
                <Field
                  className="payment-container_block_MM-YY"
                  name="cvv"
                  type="text"
                />
                <ErrorMessage
                  className="text-red"
                  name="cardNumber"
                  component="div"
                />
              </div>
            </div>
            <button type="submit" className="payment-container_btn">
              Оплатить
            </button>
          </Form>
        </Formik>
      ) : (
        <SuccessPage />
      )}
    </div>
  );
};

export default Payment;
