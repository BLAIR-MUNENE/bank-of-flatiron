import React, { useState } from "react";
import TransactionTable from "./components/TransactionTable";
import TransactionForm from "./components/TransactionForm";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  // State for storing transactions
  const [transactions, setTransactions] = useState([]);

  // State for storing new transaction data
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  });

  // State for storing search term
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle input change in transaction form
  const handleInputChange = (e) => {
    setNewTransaction({
      ...newTransaction,
      [e.target.name]: e.target.value,
    });
  };

  // Function to add new transaction
  const handleAddTransaction = () => {
    const newTransactionId = transactions.length + 1;
    const newTransactionData = {
      id: newTransactionId,
      ...newTransaction,
    };
    setTransactions([...transactions, newTransactionData]);
    // Reset form fields after adding transaction
    setNewTransaction({
      date: "",
      description: "",
      category: "",
      amount: 0,
    });
  };

  // Function to handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter transactions based on search term
  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="object-fill h-8 w-96">
      <h1 className="">Bank of Flatiron</h1>

      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

      <TransactionForm
        newTransaction={newTransaction}
        handleInputChange={handleInputChange}
        handleAddTransaction={handleAddTransaction}
      />

      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
