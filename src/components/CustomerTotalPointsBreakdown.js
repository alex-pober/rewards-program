import React, { useEffect, useState } from "react";
import useFetchTransaction from "../hooks/useFetchTransaction";
import { calculateRewards } from "../util/calculate_rewards";
import "./CustomerTotalPointsBreakdown.css";

export default function CustomerTotalPointsBreakdown({ data, dataLoading }) {
  const [allTransactions, setAllTransactions] = useState(null);
  const [allUniqueCustomers, setAllUniqueCustomers] = useState(null);

  useEffect(() => {
    // this creates a new set of all unique customer id from the data prop, and puts it in state
    setAllUniqueCustomers([
      ...new Set(
        data?.transactions?.filter(Boolean).map((item) => item.customer_id)
      ),
    ]);
    setAllTransactions(data);
  }, [data]);

  return (
    dataLoading ?
      <h1>Loading...</h1>
      :
      <section>
      {/* map over all unique customers id from state */}
      {allUniqueCustomers?.map((customerId) => {
        // filter the allTransactions state by unique customerId
        const transactionsForEachCustomerId =
          allTransactions.transactions?.filter(
            (transaction) => transaction.customer_id === customerId
          );
        return (
          <div key={`customer_${customerId}`}>
            <div className="custID-points">
              <h2>{customerId}</h2>
              <h3>
                Total Rewards Points:
                {calculateRewards(
                  ...new Array(
                    transactionsForEachCustomerId.map(
                      (transaction) => transaction.amount
                    )
                  )
                )}
              </h3>
            </div>
            <table key={`table_${customerId}`} className="breakdown-table">
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Points Earned</th>
                  <th>Transaction Date</th>
                  <th>Transaction Id</th>
                </tr>
              </thead>
              <tbody>
                {transactionsForEachCustomerId.map((transactions, innerIndex) => {
                  return (
                    <tr key={`row_${innerIndex}`}>
                      <td>${transactions.amount}</td>
                      <td>{calculateRewards([transactions.amount])}</td>
                      <td>{transactions.transaction_date.substring(0, 10)}</td>
                      <td>{transactions.transaction_id}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </section>
  );
}
