import logo from "./assets/logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import CustomerTotalPointsBreakdown from "../src/components/CustomerTotalPointsBreakdown";
import useFetchTransaction from "../src/hooks/useFetchTransaction";
import FilterByIDandDateInput from "./components/FilterByIDandDateInput";

function App() {
  // fetch all tranactions
  const { isLoading, rawData } = useFetchTransaction("transactions_01-03.json");
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    if (!isLoading) {
      setFilteredData(rawData);
    }
  }, [rawData]);

  function filterData(customerID, startDate, endDate) {
    const filteredArray = rawData?.transactions.filter(
      (item) =>
        item.customer_id.toLowerCase().includes(customerID.toLowerCase()) &&
        (!startDate || item.transaction_date >= startDate) &&
        (!endDate || item.transaction_date <= endDate)
    );
    setFilteredData({ transactions: filteredArray });
  }
  return (
    <div className="App">
      <h1>Customer Rewards Program</h1>
      <FilterByIDandDateInput
        filterFunction={filterData}
      />
      <CustomerTotalPointsBreakdown
        data={filteredData}
        dataLoading={isLoading}
      />
    </div>
  );
}

export default App;
