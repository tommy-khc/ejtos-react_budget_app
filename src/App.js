import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//Code to import Budget.js
import Budget from "./components/Budget";

// Add code to import the other components here under
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";

import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">OpenAI's Budget Allocation</h1>
        <div className="row mt-3">
          {
            // Budget component
            <div className="col-sm">
              <Budget />
            </div>
          }
          {
            //Remaining component
            <div className="col-sm">
              <Remaining />
            </div>
          }
          {
            //ExpenseTotal component
            <div className="col-sm">
              <ExpenseTotal />
            </div>
          }
          {<h1 className="row mt-3">Allocation</h1>}
          {
            //ExpenseList component
            <div className="row mt-3">
              <ExpenseList />
            </div>
          }
          {<h1 className="row mt-3">Change allocation</h1>}
          {
            //AddExpenseForm component
            <div className="row mt-3">
              <AllocationForm />
            </div>
          }
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
