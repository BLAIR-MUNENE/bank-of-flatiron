import React from "react";

const TransactionForm = ({
  newTransaction,
  handleInputChange,
  handleAddTransaction,
}) => {
  return (
    <div className="transaction-form-container">
      <div className="form-group">
        <label htmlFor="date"></label>
        <input
          type="date"
          id="date"
          name="date"
          placeholder="Date..."
          value={newTransaction.date}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description"></label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description..."
          value={newTransaction.description}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="category"></label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Category..."
          value={newTransaction.category}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="amount"></label>
        <input
          type="number"
          id="amount"
          placeholder="Amount..."
          name="amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <button onClick={handleAddTransaction} className="search-button">
          Add Transaction
        </button>
      </div>
    </div>
  );
};

export default TransactionForm;
