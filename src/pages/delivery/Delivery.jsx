import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Select from "react-select";
import useDelivery from "./useDelivery";
import { validationSchema } from "./validations";

import "./Delivery.scss";

const Delivery = ({toggolComponentDelivery}) => {
  const { changeHandler, options, value, handleSubmit, initialValues } =
    useDelivery(toggolComponentDelivery);

  return (
    <div className="delivery-container">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <p className="delivery-container_title">Информация для доставки</p>
          <div className="delivery-container_block-lastName">
            <p>Получатель</p>
            <Field
              className="delivery-container_input"
              name="lastName"
              type="text"
              placeholder="ФИО"
            />
            <ErrorMessage
              className="text-red"
              name="lastName"
              component="div"
            />
          </div>
          <div>
            <p>Адрес</p>
            <Field
              className="delivery-container_input"
              name="city"
              type="text"
              placeholder="Город"
            />
            <ErrorMessage className="text-red" name="city" component="div" />

            <Field
              className="delivery-container_input"
              name="address"
              type="text"
              placeholder="Адрес"
            />
            <ErrorMessage className="text-red" name="address" component="div" />

            <div className="delivery-container_block-city">
              <div className="w-100">
                <Select
                  options={options}
                  value={value}
                  onChange={changeHandler}
                  IndicatorSeparator={false}
                  name="country"
                  placeholder="Страна"
                />
                <ErrorMessage
                  className="text-red"
                  name="country"
                  component="div"
                />
              </div>
              <Field
                className="delivery-container_block-city_index"
                type="text"
                value={value?.value || ""}
                placeholder="Индекс"
              />
            </div>
          </div>
          <button type="submit" className="delivery-container_btn">
            Продолжить
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Delivery;
