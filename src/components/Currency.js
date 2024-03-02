import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const handleCurrencyChange = (e) => {
    dispatch({ type: "CHG_CURRENCY", payload: e.target.value });
  };
  return (
    <div className="alert alert-info">
      <span>Currency </span>
      <select onChange={handleCurrencyChange}>
        <option value="USD" name="usd" selected>
          USD
        </option>
        <option value="GBR" name="gbr">
          GBR
        </option>
        <option value="EUR" name="eur">
          EUR
        </option>
        <option value="INR" name="inr">
          INR
        </option>
      </select>
    </div>
  );
};
export default Currency;
