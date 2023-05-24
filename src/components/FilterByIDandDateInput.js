import React, { useEffect, useState } from "react";
import "./FilterByIDandDateInput.css";

export default function FilterByIDandDateInput({ filterFunction }) {
  const [customerID, setCustomerID] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    filterFunction(customerID, startDate, endDate);
  }, [customerID, startDate, endDate]);

  return (
    <div className="filter-inputs">
      <div className="filter-inputs__custId">
        <label htmlFor="customerID">Customer ID:</label>
        <input
          type="text"
          id="customerID"
          value={customerID}
          placeholder="CUSTXXX"
          onChange={(e) => setCustomerID(e.target.value)}
        />
      </div>
      <div className="filter-input-startend">
        <div className="filter-inputs__startDate">
          <label htmlFor="startDate">Start:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="filter-inputs__endDate">
          <label htmlFor="endDate">End:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
