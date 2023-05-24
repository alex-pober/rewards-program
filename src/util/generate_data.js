// Generate a list of 10 unique customer IDs
const customerIds = ['CUST001', 'CUST002', 'CUST003', 'CUST004', 'CUST005', 'CUST006', 'CUST007', 'CUST008', 'CUST009', 'CUST010'];

// Generate a list of 50 transactions
const transactions = [];
for (let i = 0; i < 50; i++) {
  // Select a random customer ID
  const customerId = customerIds[Math.floor(Math.random() * customerIds.length)];
  // Generate a random amount between 1 and 1000
  const amount = parseFloat((Math.random() * (1000 - 1) + 1).toFixed(2)).toLocaleString('en-US', {minimumFractionDigits: 2});
  // Generate a random transaction date between January 1st and March 31st
  const startDate = new Date('2023-01-01');
  const endDate = new Date('2023-03-31');
  const transactionDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  // Generate a unique transaction ID
  const transactionId = crypto.randomUUID();
  // Create a transaction object with the customer ID, amount, transaction date, and transaction ID
  const transaction = {
    customer_id: customerId,
    amount: amount,
    transaction_date: transactionDate.toISOString(),
    transaction_id: transactionId
  };
  // Add the transaction object to the list of transactions
  transactions.push(transaction);
}

// Create an object with the list of transactions
const data = { transactions: transactions };

// Convert the object to JSON
const json = JSON.stringify(data, null, 2);

// Print the JSON
console.log(data);
