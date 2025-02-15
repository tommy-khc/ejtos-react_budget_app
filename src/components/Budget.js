import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [currentBudget, setCurrentBudget] = useState(budget);
  const MAX_BUDGET = 50000000000000;
  const inputRef = useRef();

  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const { currency } = useContext(AppContext);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleBudgetChange = (event) => {
    if (event.target.value > MAX_BUDGET) {
      alert(`Budget must be less or equal to ${currency} ${MAX_BUDGET}.`);
      setCurrentBudget(MAX_BUDGET);
      dispatch({
        type: "SET_BUDGET",
        payload: MAX_BUDGET,
      });
      return;
    }
    if (event.target.value < totalExpenses) {
      alert("Budget must be greater or equal to total expenses.");
      setCurrentBudget(totalExpenses);
      dispatch({
        type: "SET_BUDGET",
        payload: totalExpenses,
      });
      return;
    }
    setCurrentBudget(event.target.value);
    dispatch({
      type: "SET_BUDGET",
      payload: event.target.value,
    });
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="1000"
        value={currentBudget}
        onChange={handleBudgetChange}
        ref={inputRef}
      ></input>
    </div>
  );
};
export default Budget;
