import React from "react";
import { render, screen } from "@testing-library/react";
import CustomerTotalPointsBreakdown from "../components/CustomerTotalPointsBreakdown";

describe("CustomerTotalPointsBreakdown", () => {
  test("renders customer ID and total rewards points", () => {
    const data = {
      transactions: [
        {
          customer_id: 1,
          amount: 100,
          transaction_date: "2023-05-01T00:00:00Z",
          transaction_id: "abc123",
        },
        {
          customer_id: 1,
          amount: 200,
          transaction_date: "2023-05-02T00:00:00Z",
          transaction_id: "def456",
        },
      ],
    };
    const { container } = render(
      <CustomerTotalPointsBreakdown data={data} dataLoading={false} />
    );

    // Assert that the customer ID is rendered
    const customerIdElement = screen.getByText("1");
    expect(customerIdElement).toBeInTheDocument();

    // Assert that the total rewards points are calculated and rendered
    const totalPointsElement = screen.getByText("Total Rewards Points: 300.00");
    expect(totalPointsElement).toBeInTheDocument();

    // Assert that the table is rendered
    const tableElement = container.querySelector(".breakdown-table");
    expect(tableElement).toBeInTheDocument();
  });

  test("renders transaction details for each customer", () => {
    const data = {
      transactions: [
        {
          customer_id: 1,
          amount: 100,
          transaction_date: "2023-05-01T00:00:00Z",
          transaction_id: "abc123",
        },
        {
          customer_id: 1,
          amount: 200,
          transaction_date: "2023-05-02T00:00:00Z",
          transaction_id: "def456",
        },
      ],
    };
    render(<CustomerTotalPointsBreakdown data={data} dataLoading={false} />);

    // Assert that the transaction details are rendered correctly
    const amountElement = screen.getByText("$100");
    expect(amountElement).toBeInTheDocument();

    const pointsEarnedElement = screen.getByText("50.00");
    expect(pointsEarnedElement).toBeInTheDocument();

    const transactionDateElement = screen.getByText("2023-05-01");
    expect(transactionDateElement).toBeInTheDocument();

    const transactionIdElement = screen.getByText("abc123");
    expect(transactionIdElement).toBeInTheDocument();
  });

  test("renders loading state when data is loading", () => {
    const { container } = render(
      <CustomerTotalPointsBreakdown data={null} dataLoading={true} />
    );

    // Assert that the loading state is rendered
    const loadingElement = screen.getByText("Loading...");
    expect(loadingElement).toBeInTheDocument();

    // Assert that the table is not rendered
    const tableElement = container.querySelector(".breakdown-table");
    expect(tableElement).not.toBeInTheDocument();
  });
});
